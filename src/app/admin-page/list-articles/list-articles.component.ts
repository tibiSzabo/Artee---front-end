import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArticleService } from '../../shared/article.service';
import { Article } from '../../articles/article.model';
import { fadeTrigger, listAnimation, listAnimation2, listItemRemoved } from '../../shared/animations';
import { Router } from '@angular/router';
import { BackendService } from '../../shared/backend.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css'],
  animations: [listItemRemoved, fadeTrigger, listAnimation2, listAnimation]
})
export class ListArticlesComponent implements OnInit, OnDestroy {
  articles: Article [];
  articlesChangedSubscription: Subscription;
  selectedArticle: Article = null;

  constructor(private articleService: ArticleService,
              private backendService: BackendService,
              private router: Router) {
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.articlesChangedSubscription = this.articleService.articlesChanged.subscribe(
      articles => this.articles = articles
    );
  }

  ngOnDestroy(): void {
    this.articlesChangedSubscription.unsubscribe();
  }

  onEditArticle(id: number) {
    this.router.navigate(['admin', 'add'], {queryParams: {edit: id}});
  }

  onDeleteArticle(id: number) {
    this.backendService.deleteArticleFromDatabase(this.selectedArticle).subscribe(
      (response) => {
        console.log(response.message);
        if (response.success) {
          this.articleService.deleteArticleById(id);
        }
      }
    );
  }

  openModal(id: number) {
    this.selectedArticle = this.articleService.getArticle(id);
  }
}

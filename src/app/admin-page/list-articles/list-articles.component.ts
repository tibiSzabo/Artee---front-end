import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArticleService } from '../../shared/article.service';
import { Article } from '../../articles/article.model';
import { fadeTrigger, listItemRemoved } from '../../shared/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css'],
  animations: [listItemRemoved, fadeTrigger]
})
export class ListArticlesComponent implements OnInit, OnDestroy {
  articles: Article [];
  articlesChangedSubscription: Subscription;
  selectedArticle: Article;

  constructor(private articleService: ArticleService,
              private router: Router) {
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.articlesChangedSubscription = this.articleService.articlesChanged.subscribe(
      articles => this.articles = articles
    );
  }

  ngOnDestroy(): void {
    // this.articlesChangedSubscription.unsubscribe();
  }

  onEditArticle(id: number) {
    this.router.navigate(['admin', 'add'], {queryParams: {edit: id}});
  }

  onDeleteArticle(id: number) {
    this.articleService.deleteArticleById(id);
  }

  openModal(id: number) {
    this.selectedArticle = this.articleService.getArticle(id);
  }
}

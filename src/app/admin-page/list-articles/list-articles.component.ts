import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArticleService } from '../../shared/article.service';
import { Article } from '../../articles/article.model';
import { listItemRemoved } from '../../shared/animations';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css'],
  animations: [listItemRemoved]
})
export class ListArticlesComponent implements OnInit, OnDestroy {
  articles: Article [];
  private articlesChangedSubscribtion: Subscription;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.articlesChangedSubscribtion = this.articleService.articlesChanged.subscribe(
      articles => this.articles = articles
    );
  }

  ngOnDestroy(): void {
    this.articlesChangedSubscribtion.unsubscribe();
  }

  onEditArticle(id: number) {

  }

  onDeleteArticle(id: number) {
    this.articleService.deleteArticleById(id);
  }
}

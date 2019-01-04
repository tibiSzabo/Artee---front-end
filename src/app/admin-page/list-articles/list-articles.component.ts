import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../../articles/article.model';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles: Article [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  onEditArticle(id: number) {

  }

  onDeleteArticle(id: number) {
    this.articleService.
  }
}

import { Article } from '../articles/article.model';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';
import { Subject } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article [] = [];

  articlesChanged = new Subject<Article []>();

  constructor(private categoryService: CategoryService,
              private backendService: BackendService) {
  }

  getArticles() {
    return this.articles.slice(0, this.articles.length);
  }

  getArticle(id: number): Article {
    for (const article of this.articles) {
      if (article.id === id) {
        return article;
      }
    }
    return null;
  }

  addArticle(article: Article) {
    this.articles.push(article);
    this.articlesChanged.next(this.articles.slice());
  }

  deleteArticleById(id: number) {
    this.articles.forEach((item, index) => {
      if (item.id === id) {
        this.articles.splice(index, 1);
      }
    });
    this.articlesChanged.next(this.articles.slice(0, this.articles.length));
  }

  updateArticle(id: number, updatedVersion: Article) {
    this.articles.forEach((item, index) => {
      if (item.id === id) {
        this.articles[index] = updatedVersion;
      }
    });
    this.articlesChanged.next(this.articles.slice(0, this.articles.length));
  }

  init() {
    this.backendService.getArticlesFromDatabase().subscribe(
      (articles) => {
        for (const article of articles) {
          const newArticle = new Article(
            article.title,
            article.image,
            article.description,
            this.categoryService.getCategoryById(article.category.id),
            article.date);
          newArticle.id = article.id;
          this.articles.push(article);
        }
        this.articlesChanged.next(this.articles.slice());
        console.log(articles);
      }
    );

  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { CategoryService } from './category.service';
import { ArticleService } from './article.service';
import { Category } from './category.model';
import { Article } from '../articles/article.model';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private categoryService: CategoryService,
              private articleService: ArticleService,
              private httpClient: HttpClient) {
  }

  addCategoryToDatabase(category: Category) {
    this.httpClient.post<any>('http://localhost:8080/api/category/add', category, {headers})
      .pipe(map(
        response => {
          return response;
        }
      ))
      .subscribe(response => console.log(response.response));
  }

  addArticleToDatabase(article: Article) {
    this.httpClient.post<any>('http://localhost:8080/api/article/add', article, {headers})
      .pipe(map(
        response => {
          return response;
        }
      ))
      .subscribe(response => console.log(response.response));
  }

  getCategoriesFromDatabase() {
    this.httpClient.get<Category[]>('http://localhost:8080/api/category/get-all')
      .subscribe(categories => console.log(categories));
  }

  getArticlesFromDatabase() {
    this.httpClient.get<Article[]>('http://localhost:8080/api/article/get-all')
      .subscribe(articles => console.log(articles));
  }

  editCategoryInDatabase(editedCategory: Category) {
    this.httpClient.put<any>('http://localhost:8080/api/category/edit', editedCategory)
      .subscribe(response => console.log(response.response));
  }

  editArticleInDatabase(editedArticle: Article) {
    this.httpClient.put<any>('http://localhost:8080/api/article/edit', editedArticle)
      .subscribe(response => console.log(response.response));
  }

  deleteCategoryFromDatabase(categoryToDelete: Category) {
    this.httpClient.delete<any>('http://localhost:8080/api/category/delete/' + categoryToDelete.id.toString())
      .subscribe(response => console.log(response.response));
  }

  deleteArticleFromDatabase(articleToDelete: Article) {
    this.httpClient.delete<any>('http://localhost:8080/api/article/delete/' + articleToDelete.id.toString())
      .subscribe(response => console.log(response.response));
  }

}

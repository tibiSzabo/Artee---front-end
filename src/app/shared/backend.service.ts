import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Category } from './category.model';
import { Article } from '../articles/article.model';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) {
  }

  addCategoryToDatabase(category: Category) {
    return this.httpClient.post<any>('http://localhost:8080/api/category/add', category, {headers})
      .pipe(map(
        response => {
          return response;
        }
      ));
  }

  addArticleToDatabase(article: Article) {
    return this.httpClient.post<any>('http://localhost:8080/api/article/add', article, {headers})
      .pipe(map(
        response => {
          return response;
        }
      ));
  }

  getCategoriesFromDatabase() {
   return this.httpClient.get<Category[]>('http://localhost:8080/api/category/get-all');
  }

  getArticlesFromDatabase() {
    return this.httpClient.get<Article[]>('http://localhost:8080/api/article/get-all');
  }

  editCategoryInDatabase(editedCategory: Category) {
    return this.httpClient.put<any>('http://localhost:8080/api/category/edit', editedCategory);
  }

  editArticleInDatabase(editedArticle: Article) {
    return this.httpClient.put<any>('http://localhost:8080/api/article/edit', editedArticle);
  }

  deleteCategoryFromDatabase(categoryToDelete: Category) {
    return this.httpClient.delete<any>('http://localhost:8080/api/category/delete/' + categoryToDelete.id);
  }

  deleteArticleFromDatabase(articleToDelete: Article) {
    return this.httpClient.delete<any>('http://localhost:8080/api/article/delete/' + articleToDelete.id.toString());
  }

}

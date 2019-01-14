import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category [] = [
    new Category('Category 1', '/assets/header1.jpg'),
    new Category('Category 2', '/assets/header2.jpg'),
    new Category('Category 3', '/assets/header3.jpg')
  ];

  constructor() { }

  getCategories() {
    return this.categories.slice();
  }

  getCategory(name: string) {
    for (let category of this.categories) {
      if (name === category.name) {
        return category;
      }
    }
  }
}


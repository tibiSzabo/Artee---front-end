import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category [] = [
    new Category(1, 'Category 1', '/assets/header1.jpg'),
    new Category(2, 'Category 2', '/assets/header2.jpg'),
    new Category(3, 'Category 3', '/assets/header3.jpg')
  ];

  categoriesChanged = new Subject<Category []>();

  constructor() {
  }

  getCategories() {
    return this.categories.slice();
  }

  getCategoryByName(name: string) {
    for (const category of this.categories) {
      if (name === category.name) {
        return category;
      }
    }
  }

  getCategoryById(id: number) {
    for (const category of this.categories) {
      if (id === category.id) {
        return category;
      }
    }
  }

  deleteCategory(id: number) {
    this.categories.forEach((item, index) => {
      if (item.id === id) {
        this.categories.splice(index, 1);
      }
    });
    this.categoriesChanged.next(this.categories.slice(0, this.categories.length));
  }

  updateCategory(id: number, newCategory: Category) {
    this.categories.forEach((item, index) => {
      if (item.id === id) {
        this.categories[index] = newCategory;
      }
    });
    this.categoriesChanged.next(this.categories.slice(0, this.categories.length));
  }

  getLastCategoryId(): number {
    let highestId = 0;
    for (const category of this.categories) {
      if (category.id >= highestId) {
        highestId = category.id;
      }
    }
    return +highestId;
  }

  addCategory(category: Category) {
    this.categories.push(category);
    this.categoriesChanged.next(this.categories.slice(0, this.categories.length));
  }
}


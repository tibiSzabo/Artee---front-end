import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../shared/article.service';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  categories: Category [];
  editor: string;
  date: any;
  time: any;

  constructor(private articleService: ArticleService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  asd() {
    console.log(this.editor);
    console.log(this.date);
    console.log(this.time);
  }
}

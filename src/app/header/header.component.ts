import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';
import { fadeTrigger, headerImageTrigger } from '../shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [headerImageTrigger]
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  displayedHeaderImage = '/assets/header_default.jpg';

  constructor() {
  }

  ngOnInit() {
    this.addDummyCategories();
    console.log(this.categories);
  }

  addDummyCategories() {
    this.categories.push(new Category('Category 1', '/assets/header1.jpg'));
    this.categories.push(new Category('Category 2', '/assets/header2.jpg'));
    this.categories.push(new Category('Category 3', '/assets/header3.jpg'));
  }

}

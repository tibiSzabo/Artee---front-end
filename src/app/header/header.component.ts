import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { headerImageTrigger } from '../shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [headerImageTrigger]
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  displayedHeaderImage = '/assets/header_default.jpg';
  filterText = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.addDummyCategories();
  }

  addDummyCategories() {
    this.categories.push(new Category('Category 1', '/assets/header1.jpg'));
    this.categories.push(new Category('Category 2', '/assets/header2.jpg'));
    this.categories.push(new Category('Category 3', '/assets/header3.jpg'));
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.router.navigate(['articles'], { queryParams: { key: this.filterText } });
    }
  }

  submitSearch() {
    this.router.navigate(['articles'], { queryParams: { key: this.filterText } });
  }
}

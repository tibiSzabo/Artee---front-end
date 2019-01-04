import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { headerImageTrigger } from '../shared/animations';
import { CategoryService } from '../shared/category.service';
import { ScrollService } from '../shared/scroll.service';

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

  constructor(private router: Router,
              private categoryService: CategoryService,
              private scroller: ScrollService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.router.navigate(['articles'], { queryParams: { searchBy: 'title', key: this.filterText } });
    }
  }

  submitSearch() {
    this.router.navigate(['articles'], { queryParams: { searchBy: 'title', key: this.filterText } });
  }

  onCategoryClicked(category: Category) {
    this.scroller.resetPosition();
    this.router.navigate(['articles'], { queryParams: { searchBy: 'category', key: category.name } });
  }

  brandClicked() {
    this.scroller.resetPosition();
    this.router.navigate(['/']);
  }
}

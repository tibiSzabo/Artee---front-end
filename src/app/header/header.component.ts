import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { headerImageTrigger } from '../shared/animations';
import { CategoryService } from '../shared/category.service';
import { ScrollService } from '../shared/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [headerImageTrigger]
})
export class HeaderComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  displayedHeaderImage = 'https://c.pxhere.com/photos/49/ee/article_background_broadsheet_business_close_up_communication_copy_daily-1141377.jpg!d';
  filterText = '';
  categoriesChangedSubscription: Subscription;

  constructor(private router: Router,
              private categoryService: CategoryService,
              private scroller: ScrollService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.categoriesChangedSubscription = this.categoryService.categoriesChanged.asObservable().subscribe(
      () => {
        this.categories = this.categoryService.getCategories();
      }
    );
  }

  ngOnDestroy(): void {
    this.categoriesChangedSubscription.unsubscribe();
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.router.navigate(['articles'], {queryParams: {searchBy: 'title', key: this.filterText}});
    }
  }

  submitSearch() {
    this.router.navigate(['articles'], {queryParams: {searchBy: 'title', key: this.filterText}});
  }

  onCategoryClicked(category: Category) {
    this.scroller.resetPosition();
    this.router.navigate(['articles'], {queryParams: {searchBy: 'category', key: category.name}});
  }

  brandClicked() {
    this.scroller.resetPosition();
    this.router.navigate(['/']);
  }

}

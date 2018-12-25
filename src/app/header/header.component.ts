import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Category } from '../shared/category.model';
import { headerImageTrigger } from '../shared/animations';
import { FilterService } from '../shared/filter.service';

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

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
    this.addDummyCategories();
  }

  addDummyCategories() {
    this.categories.push(new Category('Category 1', '/assets/header1.jpg'));
    this.categories.push(new Category('Category 2', '/assets/header2.jpg'));
    this.categories.push(new Category('Category 3', '/assets/header3.jpg'));
  }

  onChange() {
    this.filterService.updateFilterText(this.filterText);
  }
}

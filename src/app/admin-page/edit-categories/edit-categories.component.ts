import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { fadeTrigger, listAnimation } from '../../shared/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css'],
  animations: [fadeTrigger, listAnimation]
})
export class EditCategoriesComponent implements OnInit, OnDestroy {

  categories: Category [];
  selectedCategory: Category;
  newCategoryTitle: string;
  newCategoryImageUrl = '';
  categoriesChangedSubscription: Subscription;
  editMode = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.selectedCategory = this.categories[0];
    this.categoriesChangedSubscription = this.categoryService.categoriesChanged.asObservable().subscribe(
      () => {
        this.categories = this.categoryService.getCategories();
      }
    );
  }

  ngOnDestroy(): void {
    this.categoriesChangedSubscription.unsubscribe();
  }

  onSelectToEdit(category: Category) {
    this.editMode = true;
    this.selectedCategory = category;
    this.newCategoryImageUrl += '';
  }

  onSelectToDelete(category: Category) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

  onDeleteCategory() {
    this.categoryService.deleteCategory(this.selectedCategory.id);
  }

  onSaveCategory() {
    const newCategory = new Category(
      this.categoryService.getLastCategoryId() + 1,
      this.newCategoryTitle,
      this.newCategoryImageUrl);

    this.categoryService.addCategory(newCategory);

    this.dismissData();
  }

  onEditCategory() {
    const newCategory = new Category(
      this.categoryService.getLastCategoryId() + 1,
      this.newCategoryTitle,
      this.newCategoryImageUrl);

    this.categoryService.updateCategory(this.selectedCategory.id, newCategory);
    this.editMode = false;
  }

   dismissData() {
    this.newCategoryTitle = '';
    this.newCategoryImageUrl = '';
  }
}

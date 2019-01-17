import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/category.model';
import { fadeTrigger, listAnimation } from '../../shared/animations';
import { Subscription } from 'rxjs';
import { BackendService } from '../../shared/backend.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css'],
  animations: [fadeTrigger, listAnimation]
})
export class EditCategoriesComponent implements OnInit, OnDestroy {

  categories: Category [] = [];
  selectedCategory: Category = null;
  newCategoryTitle: string;
  newCategoryImageUrl = '';
  categoriesChangedSubscription: Subscription;
  editMode = false;

  constructor(private categoryService: CategoryService,
              private backendService: BackendService) {
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
  }

  onDeleteCategory() {
    this.backendService.deleteCategoryFromDatabase(this.selectedCategory).subscribe(
      (response) => {
        console.log(response.message);
        if (response.success) {
          this.categoryService.deleteCategory(this.selectedCategory.id);
        }
      });
  }

  onSaveCategory() {
    const newCategory = new Category(
      this.newCategoryTitle,
      this.newCategoryImageUrl);
    this.backendService.addCategoryToDatabase(newCategory).subscribe(
      (response) => {
        console.log(response.message);
        if (response.success) {
          newCategory.id = response.id;
          this.categoryService.addCategory(newCategory);
        }
      }
    );
    this.dismissData();
  }

  onEditCategory() {
    let title;
    let image;
    this.newCategoryTitle === '' ? title = this.selectedCategory.name : title = this.newCategoryTitle;
    this.newCategoryImageUrl === '' ? image = this.selectedCategory.image : image = this.newCategoryImageUrl;
    const newCategory = new Category(title, image);
    newCategory.id = this.selectedCategory.id;

    this.backendService.editCategoryInDatabase(newCategory).subscribe(
      (response) => {
        console.log(response.message);
        if (response.success) {
          this.categoryService.updateCategory(this.selectedCategory.id, newCategory);
        }
      }
    );
    this.editMode = false;
    this.dismissData();
  }

  dismissData() {
    this.newCategoryTitle = '';
    this.newCategoryImageUrl = '';
  }
}

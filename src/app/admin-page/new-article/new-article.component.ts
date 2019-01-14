import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category.model';
import { ArticleService } from '../../shared/article.service';
import { CategoryService } from '../../shared/category.service';
import { fadeTrigger } from '../../shared/animations';
import { Article } from '../../articles/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  animations: [fadeTrigger]
})
export class NewArticleComponent implements OnInit {

  editMode = false;
  articleToEdit: Article;
  categories: Category [];
  formTitle: string;
  formCategory;
  formEditor;
  formImageUrl: string;
  formSelectedFile: File = null;
  formDate;
  formTime: NgbTimeStruct;
  imageHelp = 'You can either upload an image, or specify the link of the desired image.';
  formSubmitted = false;
  article: Article;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Description of the article.',
    translate: 'no',
    uploadUrl: 'v1/images'
  };

  constructor(private articleService: ArticleService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    if (this.route.snapshot.queryParams.edit) {
      this.editMode = true;
      this.articleToEdit = this.articleService.getArticle(+this.route.snapshot.queryParams.edit);
      console.log(this.editMode);
      console.log(this.articleToEdit);
      this.fillEditmodeDetails();
    }
  }

  changeFile(event) {
    this.formSelectedFile = event.target.files[0];
    console.log(this.formSelectedFile);
  }

  onPreviewForm(f: HTMLFormElement) {
    if (!this.formDate) {
      this.formDate = new Date();
    } else {
      this.formDate = new Date(this.formDate.year, this.formDate.month - 1, this.formDate.day);
    }

    this.article = new Article(
      this.editMode ? this.articleToEdit.id : this.articleService.getLastArticleId() + 1,
      this.formTitle,
      this.formImageUrl,
      this.formEditor,
      this.categoryService.getCategory(this.formCategory),
      this.formDate
    );

    if (this.formTime) {
      this.formDate.setHours(this.formTime.hour);
      this.formDate.setMinutes(this.formTime.minute);
    }

    this.formSubmitted = true;
  }

  onSaveArticle() {
    if (this.editMode) {
      this.articleService.updateArticle(this.articleToEdit.id, this.article);
    } else {
      this.articleService.addArticle(this.article);
    }
    this.router.navigate(['admin', 'list']);
  }

  fillEditmodeDetails() {
    this.formTitle = this.articleToEdit.title;
    this.formCategory = this.articleToEdit.category.name;
    this.formImageUrl = this.articleToEdit.image;
    this.formEditor = this.articleToEdit.description;
    this.formDate = {
      year: this.articleToEdit.date.getFullYear(),
      month: this.articleToEdit.date.getMonth() + 1,
      day: this.articleToEdit.date.getDate()
    };
    if (this.articleToEdit.date.getMinutes() !== 0 && this.articleToEdit.date.getHours() !== 0) {
      this.formTime = {
        hour: this.articleToEdit.date.getHours(),
        minute: this.articleToEdit.date.getMinutes(),
        second: 0
      };
    }
  }
}

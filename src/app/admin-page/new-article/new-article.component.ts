import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category.model';
import { ArticleService } from '../../shared/article.service';
import { CategoryService } from '../../shared/category.service';
import { fadeTrigger } from '../../shared/animations';
import { Article } from '../../articles/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../shared/backend.service';

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
              private backendService: BackendService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    if (this.route.snapshot.queryParams.edit) {
      this.editMode = true;
      this.articleToEdit = this.articleService.getArticle(+this.route.snapshot.queryParams.edit);
      this.fillEditmodeDetails();
    }
  }

  changeFile(event) {
    this.formSelectedFile = event.target.files[0];
    console.log(this.formSelectedFile);
  }

  onPreviewForm(f: HTMLFormElement) {
    this.manageFormDate();

    this.article = new Article(
      this.formTitle,
      this.formImageUrl,
      this.formEditor,
      this.categoryService.getCategoryByName(this.formCategory),
      this.formDate
    );

    if (this.editMode) {
      this.article.id = this.articleToEdit.id;
    }

    this.formSubmitted = true;
  }

  private manageFormDate() {
    if (!this.formDate) {
      this.formDate = new Date();
    } else {
      this.formDate = new Date(this.formDate.year, this.formDate.month - 1, this.formDate.day);
    }

    if (this.formTime) {
      this.formDate.setHours(this.formTime.hour);
      this.formDate.setMinutes(this.formTime.minute);
    }

    this.formDate = this.formDate.valueOf();
  }

  onSaveArticle() {
    if (this.editMode) {
      this.backendService.editArticleInDatabase(this.article).subscribe(
        (response) => {
          console.log(response.message);
          if (response.success) {
            this.articleService.updateArticle(this.articleToEdit.id, this.article);
          }
        }
      );

    } else {
      this.backendService.addArticleToDatabase(this.article).subscribe(
        (response) => {
          console.log(response.message);
          if (response.success) {
            this.article.id = response.id;
            this.articleService.addArticle(this.article);
          }
        }
      );
    }

    this.router.navigate(['admin', 'list']);
  }

  fillEditmodeDetails() {
    this.formTitle = this.articleToEdit.title;
    this.formCategory = this.articleToEdit.category.name;
    this.formImageUrl = this.articleToEdit.image;
    this.formEditor = this.articleToEdit.description;
    this.formDate = this.articleToEdit.date;
  }
}

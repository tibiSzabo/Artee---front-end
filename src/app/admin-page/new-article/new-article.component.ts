import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category.model';
import { ArticleService } from '../../shared/article.service';
import { CategoryService } from '../../shared/category.service';
import { fadeTrigger } from '../../shared/animations';
import { Article } from '../../articles/article.model';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

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
  formEditor;
  formImageUrl: string;
  formSelectedFile: File = null;
  formDate: any;
  formTime: any;
  imageHelp = 'You can either upload an image, or specify the link of the desired image.';
  formCategory: any;
  formSubmitted = false;
  article: Article;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Description of the article.',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
  };

  constructor(private articleService: ArticleService,
              private categoryService: CategoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    if (this.route.snapshot.queryParams.edit) {
      this.editMode = true;
      this.articleToEdit = this.articleService.getArticle(this.route.snapshot.queryParams.edit);
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
      this.articleService.getLastArticleId(),
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
    this.articleService.addArticle(this.article);
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category.model';
import { ArticleService } from '../../shared/article.service';
import { CategoryService } from '../../shared/category.service';
import { fadeTrigger } from '../../shared/animations';
import { Article } from '../../articles/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  animations: [fadeTrigger]
})
export class NewArticleComponent implements OnInit {

  categories: Category [];
  formTitle: string;
  formEditor = 'Description of your article!';
  formImageUrl: string;
  formSelectedFile: File = null;
  formDate: any;
  formTime: any;
  imageHelp = 'You can either upload an image, or specify the link of the desired image.';
  formCategory: any;
  formSubmitted = false;
  article: Article;

  constructor(private articleService: ArticleService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  changeFile(event) {
    this.formSelectedFile = event.target.files[0];
    console.log(this.formSelectedFile);
  }

  onSubmitForm(f: HTMLFormElement) {
    console.log(this.formTime);
    console.log(this.formDate);

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
      this.article.time = this.formTime;
    }

    this.formSubmitted = true;

    console.log(this.formTime);
    console.log(this.formDate);
  }
}

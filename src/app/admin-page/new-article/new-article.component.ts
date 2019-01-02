import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/category.model';
import { ArticleService } from '../../shared/article.service';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  categories: Category [];
  editor: string;
  date: any;
  time: any;

  imageHelp = 'Some help with the image upload!';

  constructor(private articleService: ArticleService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  asd() {
    console.log(this.editor);
    console.log(this.date);
    console.log(this.time);
  }
}

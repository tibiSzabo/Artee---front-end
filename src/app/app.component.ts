import { Component, OnInit } from '@angular/core';
import { BackendService } from './shared/backend.service';
import { ArticleService } from './shared/article.service';
import { Article } from './articles/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}

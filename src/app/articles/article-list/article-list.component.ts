import { Component, HostBinding, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import { routeFadeStateTrigger } from '../../shared/route-animations';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  animations: [routeFadeStateTrigger]
})
export class ArticleListComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;
  articles: Article [];
  selectedArticleId: number;


  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }


  onSelectArticle(id: number) {
    this.selectedArticleId = id;
    this.router.navigate(['articles', id-1]);
    console.log('X' + window.pageXOffset + 'Y' + window.pageYOffset)
  }
}

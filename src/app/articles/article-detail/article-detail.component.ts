import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '../../shared/article.service';
import { Article } from '../article.model';
import { routeFadeStateTrigger } from '../../shared/route-animations';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  animations: [routeFadeStateTrigger]
})

export class ArticleDetailComponent implements OnInit, AfterViewInit {
  @HostBinding('@routeFadeState') routeAnimation = true;
  article: Article;

  constructor(private articleService: ArticleService,
              private activeRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const articleId = this.activeRoute.snapshot.params['id'];
    this.article = this.articleService.getArticle(articleId);
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 250);
  }

  onBack() {
    this.location.back();
  }
}

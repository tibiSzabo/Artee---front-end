import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import { routeFadeStateTrigger } from '../../shared/route-animations';
import { ScrollService } from '../../shared/scroll.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  animations: [routeFadeStateTrigger]
})
export class ArticleListComponent implements OnInit, AfterViewInit {

  @HostBinding('@routeFadeState') routeAnimation = true;
  articles: Article [];
  selectedArticleId: number;


  constructor(private articleService: ArticleService,
              private router: Router,
              private scroller: ScrollService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  ngAfterViewInit(): void {
    window.scrollTo(this.scroller.X, this.scroller.Y);
  }


  onSelectArticle(id: number) {
    this.selectedArticleId = id;
    this.router.navigate(['articles', id-1]);
    this.scroller.savePosition(window.pageXOffset, window.pageYOffset);
  }
}

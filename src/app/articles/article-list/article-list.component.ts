import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { routeFadeStateTrigger } from '../../shared/route-animations';
import { ScrollService } from '../../shared/scroll.service';
import { fadeTrigger } from '../../shared/animations';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  animations: [routeFadeStateTrigger, fadeTrigger]
})
export class ArticleListComponent implements OnInit, AfterViewInit, OnDestroy {

  // @HostBinding('@routeFadeState') routeAnimation = true;
  articles: Article [];
  articlesToDisplay: Article [];
  selectedArticleId: number;
  pages: number [];
  currentPage: number;
  filterText = '';
  filterBy = 'title';
  searchMode = false;

  constructor(private articleService: ArticleService,
              private router: Router,
              private scroller: ScrollService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.currentPage = this.route.snapshot.params['id'] ? this.route.snapshot.params['id'] : 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.articlesToDisplay = this.articles.slice((this.currentPage - 1) * 10, this.currentPage * 10);
    this.pages = this.getPages();

    this.route.queryParams.subscribe(params => {
      if (params['key'] && params['searchBy']) {
        this.filterText = params['key'];
        this.filterBy = params['searchBy'];
      }
      if (this.filterText.trim() !== '') {
        this.searchMode = true;
        window.scrollTo(0, 0);
      }
    });

  }

  ngAfterViewInit(): void {
    window.scrollTo(this.scroller.X, this.scroller.Y);
  }

  ngOnDestroy(): void {
  }

  onSelectArticle(id: number) {
    this.selectedArticleId = id;
    this.router.navigate(['article', id - 1]);
    this.scroller.savePosition(window.pageXOffset, window.pageYOffset);
  }

  getPages() {
    let noOfPages: number;
    if (this.articles.length % 10 === 0) {
      noOfPages = this.articles.length / 10;
    } else if (this.articles.length < 10) {
      noOfPages = 1;
    } else {
      noOfPages = Math.floor(this.articles.length / 10) + 1;
    }
    let pages: number [] = [];
    for (let i = 1; i <= noOfPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  onSelectPage(page: number) {
    this.router.navigate(['articles', +page]);
  }
}

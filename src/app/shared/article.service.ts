import { Article } from '../articles/article.model';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article [] = [
    new Article(1, 'Lorem', 'https://c.pxhere.com/images/b0/cb/aebdee4fcbddbfa3c7552877aeb2-1450307.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', this.categoryService.getCategory('Category 1'), new Date(2018, 5, 15)),
    new Article(2, 'Lorem', 'https://c.pxhere.com/photos/15/62/maple_tree_autumn_leaves_foliage_colorful_woods_maple_fall-809032.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 2', ''), new Date(2018, 5, 15)),
    new Article(3, 'Lorem', 'https://c.pxhere.com/photos/98/d2/autumn_autumn_leaves_color_daylight_environment_fall_fallen_leaves_forest-984199.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 3', ''), new Date(2018, 5, 15)),
    new Article(4, 'Lorem', 'https://c.pxhere.com/photos/02/44/forest_autumn_fall_nature_tree_season_foliage_yellow-1332076.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 1', ''), new Date(2018, 5, 15)),
    new Article(5, 'Lorem', 'https://c.pxhere.com/photos/fa/af/tree_foliage_forest_woods_nature_autumn_fall_perspective-779877.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 2', ''), new Date(2018, 5, 15)),
    new Article(6, 'Fos', 'https://c.pxhere.com/photos/0f/b5/leaves_trees_nature_autumn_fall_forest_season_natural-1349570.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer KAKI elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 3', ''), new Date(2018, 5, 15)),
    new Article(7, 'Borem', 'https://c.pxhere.com/photos/da/e8/tree_leaves_maple_autumn_fall_red_woods_forest-1017374.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 1', ''), new Date(2018, 5, 15)),
    new Article(1, 'Fos', 'https://c.pxhere.com/images/b0/cb/aebdee4fcbddbfa3c7552877aeb2-1450307.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 1', ''), new Date(2018, 5, 15)),
    new Article(2, 'Lorem', 'https://c.pxhere.com/photos/15/62/maple_tree_autumn_leaves_foliage_colorful_woods_maple_fall-809032.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 2', ''), new Date(2018, 5, 15)),
    new Article(3, 'Borem', 'https://c.pxhere.com/photos/98/d2/autumn_autumn_leaves_color_daylight_environment_fall_fallen_leaves_forest-984199.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 3', ''), new Date(2018, 5, 15)),
    new Article(4, 'Borem', 'https://c.pxhere.com/photos/02/44/forest_autumn_fall_nature_tree_season_foliage_yellow-1332076.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 1', ''), new Date(2018, 5, 15)),
    new Article(5, 'Lorem', 'https://c.pxhere.com/photos/fa/af/tree_foliage_forest_woods_nature_autumn_fall_perspective-779877.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 2', ''), new Date(2018, 5, 15)),
    new Article(6, 'LUL', 'https://c.pxhere.com/photos/0f/b5/leaves_trees_nature_autumn_fall_forest_season_natural-1349570.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 3', ''), new Date(2018, 5, 15)),
    new Article(7, 'Lorem', 'https://c.pxhere.com/photos/da/e8/tree_leaves_maple_autumn_fall_red_woods_forest-1017374.jpg!d',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' +
      ' penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', new Category('Category 1', ''), new Date(2018, 5, 15))
  ];

  constructor(private categoryService: CategoryService) {
  }

  getArticles() {
    return this.articles.slice();
  }

  getArticle(id: number) {
    return this.articles[id];
  }

  getLastArticleId(): number {
    return this.articles[this.articles.length - 1].id;
  }

  addArticle(article: Article) {
    this.articles.push(article);
  }

}


import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleService } from './shared/article.service';
import { ArticlesComponent } from './articles/articles.component';
import { FilterPipe } from './shared/filter.pipe';
import { PageNotFound } from './pagenotfound/pagenotfound';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewArticleComponent } from './admin-page/new-article/new-article.component';
import { ListArticlesComponent } from './admin-page/list-articles/list-articles.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditCategoriesComponent } from './admin-page/edit-categories/edit-categories.component';
import { CategoryService } from './shared/category.service';
import { SanitizeHtmlPipe } from './shared/sanitize-html-pipe.pipe';

export function articleProviderFactory(provider: ArticleService) {
  return () => provider.init();
}

export function categoryProviderFactory(provider: CategoryService) {
  return () => provider.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticlesComponent,
    FilterPipe,
    PageNotFound,
    AdminPageComponent,
    NewArticleComponent,
    ListArticlesComponent,
    EditCategoriesComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: articleProviderFactory, deps: [ArticleService], multi: true },
    { provide: APP_INITIALIZER, useFactory: categoryProviderFactory, deps: [CategoryService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

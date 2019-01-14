import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


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
import { EditArticlesComponent } from './admin-page/edit-articles/edit-articles.component';
import { NewArticleComponent } from './admin-page/new-article/new-article.component';
import { ListArticlesComponent } from './admin-page/list-articles/list-articles.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';


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
    EditArticlesComponent,
    NewArticleComponent,
    ListArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

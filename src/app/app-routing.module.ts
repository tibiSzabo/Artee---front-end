import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { PageNotFound } from './pagenotfound/pagenotfound';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewArticleComponent } from './admin-page/new-article/new-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/:id', component: ArticleListComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'admin/add', component: NewArticleComponent },
  { path: '**', component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

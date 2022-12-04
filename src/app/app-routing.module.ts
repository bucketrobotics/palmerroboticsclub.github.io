import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { NewsArticleResolver } from './news-article.resolver';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: "home", component: IndexComponent },
  {
    path: "news", component: NewsComponent,
    children: [
      {
        path: "",
        component: NewsListComponent
      },
      {
        path: "article/:id",
        component: NewsArticleComponent,
        resolve: {
          article: NewsArticleResolver
        }
      },
      { path: "**", redirectTo: "" }
    ]
  },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

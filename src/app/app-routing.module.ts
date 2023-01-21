import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CurrentSponsorsComponent } from './current-sponsors/current-sponsors.component';
import { FtcComponent } from './ftc/ftc.component';
import { IndexComponent } from './index/index.component';
import { NewsArticleResolver } from './news-article.resolver';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { TeamGalleryComponent } from './team-gallery/team-gallery.component';
import { TeamMembersComponent } from './team-members/team-members.component';

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Bucket Robotics | ${title}`);
    }
  }
}

const routes: Routes = [
  { path: "home", component: IndexComponent, title: "Home" },
  {
    path: "team",
    children: [
      {
        path: "members",
        component: TeamMembersComponent,
        title: "Team Members"
      },
      {
        path: "gallery",
        component: TeamGalleryComponent,
        title: "Team Gallery"
      }
    ],
  },
  {
    path: "support-us",
    component: SupportUsComponent,
    title: "Support Us"
  },
  {
    path: "current-sponsors",
    component: CurrentSponsorsComponent,
    title: "Current Sponsors"
  },
  {
    path: "ftc",
    component: FtcComponent,
    title: "First Tech Challenge"
  },
  {
    path: "events",
    children: [
      {
        path: "",
        component: NewsListComponent,
        title: "Events"
      },
      {
        path: "article/:id",
        component: NewsArticleComponent,
        resolve: {
          article: NewsArticleResolver
        },
        title: "Event Article"
      },
      { path: "**", redirectTo: "" }
    ]
  },
  { path: "contact", component: ContactComponent, title: "Contact Us" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }

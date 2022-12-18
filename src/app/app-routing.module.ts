import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CurrentSponsorsComponent } from './current-sponsors/current-sponsors.component';
import { EventGeneralComponent } from './event-general/event-general.component';
import { EventOutreachComponent } from './event-outreach/event-outreach.component';
import { FtcComponent } from './ftc/ftc.component';
import { IndexComponent } from './index/index.component';
import { NewsArticleResolver } from './news-article.resolver';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { TeamGalleryComponent } from './team-gallery/team-gallery.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const routes: Routes = [
  { path: "home", component: IndexComponent },
  {
    path: "team",
    children: [
      {
        path: "members",
        component: TeamMembersComponent
      },
      {
        path: "gallery",
        component: TeamGalleryComponent
      }
    ]
  },
  {
    path: "support-us",
    component: SupportUsComponent
  },
  {
    path: "current-sponsors",
    component: CurrentSponsorsComponent
  },
  {
    path: "ftc",
    component: FtcComponent
  },
  {
    path: "events",
    children: [
      {
        path: "outreach", component: EventOutreachComponent,
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
            },
            data: {
              type: "outreach"
            }
          },
          { path: "**", redirectTo: "" }
        ],
        data: {
          type: "outreach"
        }
      },
      {
        path: "general", component: EventGeneralComponent,
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
            },
            data: {
              type: "general"
            }
          },
          { path: "**", redirectTo: "" }
        ],
        data: {
          type: "general"
        }
      }
    ]
  },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

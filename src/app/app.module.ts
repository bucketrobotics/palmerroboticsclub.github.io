import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { CurrentSponsorsComponent } from './current-sponsors/current-sponsors.component';
import { FtcComponent } from './ftc/ftc.component';
import { EventOutreachComponent } from './event-outreach/event-outreach.component';
import { EventGeneralComponent } from './event-general/event-general.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamGalleryComponent } from './team-gallery/team-gallery.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { GetStorageDownloadURLPipe } from './get-storage-download-url.pipe';
import { PremiumSponsorsListComponent } from './premium-sponsors-list/premium-sponsors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    NewsArticleComponent,
    NewsListComponent,
    SupportUsComponent,
    CurrentSponsorsComponent,
    FtcComponent,
    EventOutreachComponent,
    EventGeneralComponent,
    TeamMembersComponent,
    TeamGalleryComponent,
    GetStorageDownloadURLPipe,
    PremiumSponsorsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

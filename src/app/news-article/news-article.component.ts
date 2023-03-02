import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent {
  article!: DocumentData;
  exists: boolean = false;
  route: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.route = activatedRoute
  }

  ngOnInit() {
    this.route.data.subscribe(({ article }) => {
      this.exists = article !== undefined;
      console.log(this.exists);
      this.article = article;
    })
  }
 
}

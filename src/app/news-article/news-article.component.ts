import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent {
  article!: DocumentData;
  route: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.route = activatedRoute
  }

  ngOnInit() {
    this.route.data.subscribe(({ article }) => {
      this.article = article;
    })
  }
 
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import news from "../../assets/news/news";
import type { Article } from "../../assets/news/news";

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent {
  article!: Article;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ article }) => {
      this.article = article;
    })
  }
 
}

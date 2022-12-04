import { Component, Input } from '@angular/core';
import news from "../../assets/news/news";
import type { Article } from "../../assets/news/news";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  articles: Article[] = news;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-article-card',
  templateUrl: './news-article-card.component.html',
  styleUrls: ['./news-article-card.component.scss']
})
export class NewsArticleCardComponent {
  @Input() article: any;
}

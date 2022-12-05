import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  articles: Observable<DocumentData[]>;
  constructor(firestore: Firestore) {
    const col = collection(firestore, 'news-articles');
    this.articles = collectionData(col, {"idField": "id"});
  }
}

import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData, orderBy } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { query } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  articles: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'news-articles');
    const q = query(col, orderBy("date", "desc"));
    this.articles = collectionData(q, {"idField": "id"});
  }
}

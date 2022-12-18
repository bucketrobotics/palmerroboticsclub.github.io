import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { query, where } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  newsType!: string;
  route: ActivatedRoute
  articles: Observable<DocumentData[]>;

  constructor(firestore: Firestore, route: ActivatedRoute) {
    this.route = route;
    const col = collection(firestore, 'news-articles');
    const q = query(col, where("type", "==", route.snapshot.data["type"]));
    this.articles = collectionData(q, {"idField": "id"});
  }
}

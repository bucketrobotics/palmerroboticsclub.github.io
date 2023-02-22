import { Injectable } from '@angular/core';
import { Firestore, docData, doc, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleService {
  firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  get(id: string): Observable<DocumentData> {
    const ref = doc(this.firestore, `news-articles/${id}`);
    console.log("getting " + id);
    return docData(ref, {"idField":"id"});
  }
}

import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData, query, where } from '@angular/fire/firestore';
import { getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-sponsors',
  templateUrl: './current-sponsors.component.html',
  styleUrls: ['./current-sponsors.component.scss']
})
export class CurrentSponsorsComponent {
  sponsors1: Observable<DocumentData[]>;
  sponsors2: Observable<DocumentData[]>;
  sponsors3: Observable<DocumentData[]>;
  sponsors4: Observable<DocumentData[]>;
  sponsors5: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'sponsors');

    const q1 = query(col, where('level', '==', 1));
    this.sponsors1 = collectionData(q1);

    const q2 = query(col, where('level', '==', 2));
    this.sponsors2 = collectionData(q2);

    const q3 = query(col, where('level', '==', 3));
    this.sponsors3 = collectionData(q3);

    const q4 = query(col, where('level', '==', 4));
    this.sponsors4 = collectionData(q4);

    const q5 = query(col, where('level', '==', 5));
    this.sponsors5 = collectionData(q5);
  }
}


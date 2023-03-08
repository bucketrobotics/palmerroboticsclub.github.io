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
  sponsors: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'sponsors');

    this.sponsors = collectionData(col);
  }
}


import { Component } from '@angular/core';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss']
})
export class SponsorsListComponent {
  sponsors: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'sponsors');
    this.sponsors = collectionData(col);
  }
}


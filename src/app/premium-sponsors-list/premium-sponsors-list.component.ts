import { Component } from '@angular/core';
import { collection, collectionData, DocumentData, Firestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-premium-sponsors-list',
  templateUrl: './premium-sponsors-list.component.html',
  styleUrls: ['./premium-sponsors-list.component.scss']
})
export class PremiumSponsorsListComponent {
  sponsors: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'sponsors');
    const q = query(col, where('level', '>=', 2));
    this.sponsors = collectionData(q);
  }
}

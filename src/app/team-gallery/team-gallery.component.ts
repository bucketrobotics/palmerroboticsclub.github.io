import { Component } from '@angular/core';
import { collection, collectionData, DocumentData, Firestore, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-gallery',
  templateUrl: './team-gallery.component.html',
  styleUrls: ['./team-gallery.component.scss']
})
export class TeamGalleryComponent {
  gallery: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'gallery');
    const q = query(col, orderBy("date", "desc"));
    this.gallery = collectionData(q);
  }
}

import { inject, TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';

import { NewsArticleService } from './news-article.service';

const FirestoreStub = {};

describe('NewsArticleService', () => {
  let service: NewsArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Firestore, useValue: FirestoreStub },
      ],
    });
    service = TestBed.inject(NewsArticleService);
  });
  
  it('should be created', inject([Firestore], (firestore: Firestore) => {
    expect(service).toBeTruthy();
  }));
});

import { inject, TestBed } from '@angular/core/testing';

import { NewsArticleResolver } from './news-article.resolver';
import { Firestore } from '@angular/fire/firestore';

const FirestoreStub = {};

describe('NewsArticleResolver', () => {
  let resolver: NewsArticleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Firestore, useValue: FirestoreStub },
      ],
    });
    resolver = TestBed.inject(NewsArticleResolver);
  });

  it('should be created', inject([Firestore], (firestore: Firestore) => {
    expect(resolver).toBeTruthy();
  }));
});

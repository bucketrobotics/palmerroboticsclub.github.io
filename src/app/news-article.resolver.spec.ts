import { TestBed } from '@angular/core/testing';

import { NewsArticleResolver } from './news-article.resolver';

describe('NewsArticleResolver', () => {
  let resolver: NewsArticleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewsArticleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

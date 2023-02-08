import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleCardComponent } from './news-article-card.component';

describe('NewsArticleCardComponent', () => {
  let component: NewsArticleCardComponent;
  let fixture: ComponentFixture<NewsArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

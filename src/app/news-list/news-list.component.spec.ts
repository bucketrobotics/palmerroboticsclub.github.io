import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { Firestore } from '@angular/fire/firestore';

const FirestoreStub = {};

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListComponent ],
      providers: [
        { provide: Firestore, useValue: FirestoreStub },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([Firestore], (firestore: Firestore) => {
    expect(component).toBeTruthy();
  }));
});

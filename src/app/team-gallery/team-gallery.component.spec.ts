import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGalleryComponent } from './team-gallery.component';
import { Firestore } from '@angular/fire/firestore';

const FirestoreStub = {}

describe('TeamGalleryComponent', () => {
  let component: TeamGalleryComponent;
  let fixture: ComponentFixture<TeamGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGalleryComponent ],
      providers: [
        { provide: Firestore, useValue: FirestoreStub },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([Firestore], (firestore: Firestore) => {
    expect(component).toBeTruthy();
  }));
});

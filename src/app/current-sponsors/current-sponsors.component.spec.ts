import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';

import { CurrentSponsorsComponent } from './current-sponsors.component';

const FirestoreStub = {};

describe('CurrentSponsorsComponent', () => {
  let component: CurrentSponsorsComponent;
  let fixture: ComponentFixture<CurrentSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSponsorsComponent ],
      providers : [{ provide : Firestore, useValue : FirestoreStub }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

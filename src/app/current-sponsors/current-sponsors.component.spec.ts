import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSponsorsComponent } from './current-sponsors.component';

describe('CurrentSponsorsComponent', () => {
  let component: CurrentSponsorsComponent;
  let fixture: ComponentFixture<CurrentSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSponsorsComponent ]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSponsorsListComponent } from './premium-sponsors-list.component';

describe('PremiumSponsorsListComponent', () => {
  let component: PremiumSponsorsListComponent;
  let fixture: ComponentFixture<PremiumSponsorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumSponsorsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumSponsorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

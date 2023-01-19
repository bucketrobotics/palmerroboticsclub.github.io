import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSponsorComponent } from './premium-sponsor.component';

describe('PremiumSponsorComponent', () => {
  let component: PremiumSponsorComponent;
  let fixture: ComponentFixture<PremiumSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOutreachComponent } from './event-outreach.component';

describe('EventOutreachComponent', () => {
  let component: EventOutreachComponent;
  let fixture: ComponentFixture<EventOutreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventOutreachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

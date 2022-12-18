import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGeneralComponent } from './event-general.component';

describe('EventGeneralComponent', () => {
  let component: EventGeneralComponent;
  let fixture: ComponentFixture<EventGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

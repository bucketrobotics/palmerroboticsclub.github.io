import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGalleryComponent } from './team-gallery.component';

describe('TeamGalleryComponent', () => {
  let component: TeamGalleryComponent;
  let fixture: ComponentFixture<TeamGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

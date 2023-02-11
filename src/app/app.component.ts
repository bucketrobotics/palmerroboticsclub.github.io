import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'palmerroboticsclub';
  @ViewChild('navbar') navbar!:ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe((val) => {
      // Filter the event type
      if (val instanceof NavigationStart) {
        // Hide the navbar
        let collapse = new bootstrap.Collapse(this.navbar.nativeElement, { toggle: false });
        collapse.hide();
      }
    });
  }
}

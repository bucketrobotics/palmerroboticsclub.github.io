import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'palmerroboticsclub';
  @ViewChild('navbarToggler') navbarToggler!:ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe((val) => {
      // Filter the event type
      if (val instanceof NavigationStart) {
        // Hide the navbar
        this.navbarToggler.nativeElement.click();
        // Debug log
        console.log('NavBar closed');
      }
    });
  }
}

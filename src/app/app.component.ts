import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'palmerroboticsclub';

  onNgInit() { //@ts-ignore
    mapbox.accessToken = 'pk.eyJ1Ijoic2FpbGJvYXRwb28iLCJhIjoiY2xheDN5MWwwMDVkeTQwbXVvaDZqZzRqNiJ9.AgXrDuewkhFQc7e3fU--DQ';
  }
}

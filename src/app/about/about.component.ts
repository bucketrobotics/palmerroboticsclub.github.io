import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  map: any;

  ngAfterViewInit() {
    // @ts-ignore
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpbGJvYXRwb28iLCJhIjoiY2xheDN5MWwwMDVkeTQwbXVvaDZqZzRqNiJ9.AgXrDuewkhFQc7e3fU--DQ';
    // @ts-ignore
    this.map = new mapboxgl.Map({
      container: "about-map", // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-123.12896, 49.15296], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });
  }
}

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild("map") mapEl: any;
  map: any;

  onNgViewInit() { // @ts-ignore
    this.map = new mapboxgl.Map({
      container: this.mapEl.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [49.15296, -123.12896], // starting position [lng, lat]
      zoom: 17 // starting zoom
  });
  }
}

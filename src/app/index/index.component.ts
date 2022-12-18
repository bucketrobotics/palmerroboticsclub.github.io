import { Component } from '@angular/core';

var motds = [
  '"We make robots ...and so should you!',
  'Join us for free snacks! (Sometimes)',
  'Robots are precise, but are they nice?'
]

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  motd = "";

  ngOnInit() {
    var rand = Math.floor(Math.random() * motds.length);
    this.motd = motds[rand];
  }
}

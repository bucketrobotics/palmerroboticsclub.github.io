import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-sponsor',
  templateUrl: './premium-sponsor.component.html',
  styleUrls: ['./premium-sponsor.component.scss']
})
export class PremiumSponsorComponent {
  @Input() path: string = ""
  @Input() name: string = ""
  @Input() url: string = ""
}

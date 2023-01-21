import { Component } from '@angular/core';
import { getStorageDownloadURL } from '../get-storage-download-url.pipe';

@Component({
  selector: 'app-support-us',
  templateUrl: './support-us.component.html',
  styleUrls: ['./support-us.component.scss']
})
export class SupportUsComponent {
  donateUrl = "dontating/Donating.pdf"
}

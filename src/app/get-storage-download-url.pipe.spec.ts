import { GetStorageDownloadURLPipe } from './get-storage-download-url.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { Storage } from '@angular/fire/storage';

describe('GetStorageDownloadURLPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([Storage], (storage: Storage) => {
    let pipe = new GetStorageDownloadURLPipe(storage);
    expect(pipe).toBeTruthy();
  })); 
});

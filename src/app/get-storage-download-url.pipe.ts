import { Pipe, PipeTransform } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

@Pipe({
  name: 'getStorageDownloadURL'
})
export class GetStorageDownloadURLPipe implements PipeTransform {

  constructor(private storage: Storage) {}

  transform(path: string): Observable<string> {
    return from(getDownloadURL(ref(this.storage, path)));
  }

}

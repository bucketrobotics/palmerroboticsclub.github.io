import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';
import { NewsArticleService } from './news-article.service';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleResolver implements Resolve<Observable<DocumentData>> {
  constructor(private newsArticleService: NewsArticleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DocumentData> {
    console.log("resolving");
    return this.newsArticleService.get(route.paramMap.get("id")!);
  }
}

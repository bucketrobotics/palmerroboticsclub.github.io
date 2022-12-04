import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import news from 'src/assets/news/news';
import { Article } from 'src/assets/news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsArticleResolver implements Resolve<Article> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article {
    return news.find(x => x["id"] == route.paramMap.get("id"))!;
  }
}

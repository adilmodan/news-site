import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsServiceService 
{
  topSportsUS_Url : string;
  
  constructor(private http: HttpClient)
  {
    this.topSportsUS_Url = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=afcd0673c537436390a52db604d9ca2c';

  }

  getTopSportsUS(): Observable<any> 
  {
    return this.http.get(this.topSportsUS_Url);
  }

}

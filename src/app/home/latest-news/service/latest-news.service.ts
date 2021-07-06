import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LatestNewsModel } from '../latestNewsModel';


const apiUrl = 'http://localhost:3000/customer'

@Injectable({
  providedIn: 'root'
})

export class LatestNewsService
{
  constructor(private http: HttpClient) { }

  getLastNewsTask(): Observable<LatestNewsModel[]>
  {
    return this.http.get<LatestNewsModel[]>(apiUrl);
  }

}

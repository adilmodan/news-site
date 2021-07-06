import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  baseUrl : string;
  appId: string;
  units: string;
  url : string = '';
  forecast: any;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/';
    this.appId = 'a0d7d8a707b1184de7aa1bd11f49fa71';
    this.units = 'metric';
    }

   getWeatherForecast(cityName: string): Observable<any> {
     
    this.url = this.baseUrl + 'forecast?q=' + cityName + '&appid=' + this.appId + '&units=' + this.units;
  
    return this.http.get(this.url);
 }
}

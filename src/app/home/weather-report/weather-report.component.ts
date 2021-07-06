import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service/weather-service.service';

// const iplocate = require("node-iplocate"); // for geo location
// const publicIp = require('public-ip'); // for geo location

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  ipAddress: string ='';
  ipGeoLocationId= 'e48e08819fea4f84a01430fac29ade42';
  location:any;
  url ='https://api.ipgeolocation.io/';
  errorMessage: string = '';
  cityName: string = '';
  disabledForecastButton: boolean = false;
  weatherForecastData: any;
  // cityinitail:string = '';
  weather4ForecastData: any;//added

  constructor(private weatherService: WeatherServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any) => {
      this.ipAddress = res.ip;
    })

    this.http.get(this.url + 'ipgeo?apiKey=' + this.ipGeoLocationId + "&ip=" + this.ipAddress).subscribe((result:any) => {
      this.cityName = result.city;
      this.weatherService.getWeatherForecast(this.cityName).subscribe(data => { 

        this.weatherForecastData = data;
  
      });
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SportsServiceService } from './service/sports-service.service';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  topSportList:any;

  constructor(private sportsServiceService:SportsServiceService,private http: HttpClient) { }

  ngOnInit(): void 
  {
    this.sportsServiceService.getTopSportsUS().subscribe(data => 
      {
        this.topSportList = data;
  
        console.log("----");
        console.log(data.articles);
        //console.log(data.articles[0].title);
      });
  }

}

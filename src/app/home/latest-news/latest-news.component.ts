import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LatestNewsModel } from './latestNewsModel';
import { LatestNewsService } from './service/latest-news.service';



@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit 
{
  latestNewsList: LatestNewsModel[] | undefined;

  constructor(private LatestNewsService: LatestNewsService, private http: HttpClient) { }

  ngOnInit(): void 
  {
    this.LatestNewsService.getLastNewsTask().subscribe(data =>
    { 
      this.latestNewsList = data;  
    });
  }

}

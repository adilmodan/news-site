import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddnewNewsServiceService } from 'src/app/addnew-news/addnew-news-service/addnew-news-service.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  // news:any  = {
  //   title:'',
  //   description:'',
  //   url:'',
  //   urlToImage: '',
  //   publishedAt: ''
  // };
  searchBox='';
  allNews:any;

  constructor(private displayNews: AddnewNewsServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.displayNews.getAllNews().subscribe((data) => {
      this.allNews = data;
    });
  }

  delete(id: any){
    this.displayNews.deleteNews(id).subscribe((data) => {
      alert("Record successfully deleted!");
    })

    this.displayNews.getAllNews().subscribe((data) => {
      this.allNews = data;
    });
    window.location.reload();
  }

  edit(news: any){
    localStorage.setItem('editNews', JSON.stringify(news));
    this.router.navigate(['editNews']);
  }

  search(){
    // let searchNews;
    this.displayNews.searchNews(this.searchBox).subscribe((data) => {
      this.allNews = data;
    });
  }

}

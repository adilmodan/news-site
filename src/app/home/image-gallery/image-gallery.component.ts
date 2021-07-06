import { Component, OnInit } from '@angular/core';
import { AddnewNewsServiceService } from 'src/app/addnew-news/addnew-news-service/addnew-news-service.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  title = 'angularboot5';
  allNews:any;
  data:any;
  constructor(private displayNews: AddnewNewsServiceService) { }

  ngOnInit(): void {

    this.displayNews.getAllNews().subscribe((news) => {
      this.allNews = news;

      this.data = [
        { img: this.allNews[0].urlToImage, title: this.allNews[0].title },
        { img: this.allNews[1].urlToImage, title: this.allNews[1].title },
        { img: this.allNews[2].urlToImage, title: this.allNews[2].title }
      ];
      
    });
  }

  getNews(){
    this.displayNews.getAllNews().subscribe((data) => {
      this.allNews = data;
    });
  }

}

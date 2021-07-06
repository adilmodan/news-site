import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddnewNewsServiceService } from 'src/app/addnew-news/addnew-news-service/addnew-news-service.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  editNewsForm!: FormGroup;
  
  news: any;

  constructor(private formBuilder: FormBuilder, private addNewNewsService: AddnewNewsServiceService, private router: Router) { }

  ngOnInit(): void {
    this.editNewsForm = this.formBuilder.group({
      title:[''],
      description: [''],
      url: [''],
      urlToImage: [''],
      publishedAt: ['']
    });

    this.news = localStorage.getItem('editNews');
    this.displayEditNews();
    
  }

  get f() { return this.editNewsForm.controls; }

  onSubmit(){
    let submitNews = JSON.parse(this.news);
    this.addNewNewsService.updateNews(this.editNewsForm.value, submitNews._id).subscribe(() => {  });
    localStorage.clear();
    this.router.navigate(['logIn']).then(()=> {
      window.location.reload();
    });
  }

  displayEditNews(){
    let editNews = JSON.parse(this.news);
    console.log(editNews.title);

    this.f.title.setValue(editNews.title);
    this.f.description.setValue(editNews.description);
    this.f.url.setValue(editNews.url);
    this.f.urlToImage.setValue(editNews.urlToImage);
    this.f.publishedAt.setValue(editNews.publishedAt);
  }

}

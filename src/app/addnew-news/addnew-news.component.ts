import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddnewNewsServiceService } from './addnew-news-service/addnew-news-service.service';

@Component({
  selector: 'app-addnew-news',
  templateUrl: './addnew-news.component.html',
  styleUrls: ['./addnew-news.component.css']
})
export class AddnewNewsComponent implements OnInit {

  addNewsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private addNewNewsService: AddnewNewsServiceService, private router: Router) { }

  ngOnInit(): void {
    this.addNewsForm = this.formBuilder.group({
      title:[''],
      description: [''],
      url: [''],
      urlToImage: [''],
      publishedAt: ['']
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.addNewsForm.controls; }

  onSubmit(){
    console.log(this.addNewsForm.value);
    this.addNewNewsService.register(this.addNewsForm.value).subscribe(() => {  });

    this.router.navigate(['logIn']);
  }

}

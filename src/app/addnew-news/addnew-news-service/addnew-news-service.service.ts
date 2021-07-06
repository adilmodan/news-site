import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


const registerUrl = 'http://localhost:3000/news/newslist/';

@Injectable({
  providedIn: 'root'
})
export class AddnewNewsServiceService {

  constructor(private http: HttpClient) { }

  getAllNews(){
    return this.http.get(registerUrl);
  }

  deleteNews(id:any){
    return this.http.delete(registerUrl + id);
  }

  updateNews(data:any, id:any){
    console.log("updating record: " + id);
    return this.http.put(registerUrl + id, data);
  }

  register(data: any) {
    return this.http.post(registerUrl, data);
  }

  searchNews(title:any){
    return this.http.get(registerUrl + title);
  }
}

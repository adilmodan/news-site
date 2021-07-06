import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor() { }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { News } from './news.interface';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   apiUrl = "http://localhost:3000";
 
//   constructor(private http: HttpClient) { }
 
//   getAllNews(){
//     return this.http.get<News[]>(this.apiUrl+'/public/allNews');
//   }
 
//   login(email: string, password: string){
//     return this.http.post<any>(this.apiUrl+'/login', {email, password})
//   }
 
//   addNews(news: News){
//     let httpOptions = {
//       headers: new HttpHeaders({
//         'Authorization': 'Bearer '+sessionStorage.getItem('token')
//       })
//     };
//     return this.http.post<any>(this.apiUrl + '/admin/news', news, httpOptions)
//   }
// }
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import {ContactModel} from 'src/app/contact-us/contactModel'

const apiUrl = 'http://localhost:3000/customer'

@Injectable({
  providedIn: 'root'
})
export class ContactUsService 
{
  constructor(private http: HttpClient) { }

  addContactTask(contactInfo: ContactModel)
  {
    return this.http.post(apiUrl+'/contact-us-user-info', contactInfo);
  }
}

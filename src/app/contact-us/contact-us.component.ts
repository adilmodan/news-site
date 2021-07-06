import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import {Router} from '@angular/router'

// import {ContactModel} from 'src/app/contact-us/contactModel';
import {ContactUsService} from 'src/app/contact-us/service/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit
{
  controlForm!:FormGroup;
  //formBuilder: FormBuilder;
  //contactInfo :ContactModel;
  
  constructor(private formBuilder: FormBuilder,private contactUsService: ContactUsService , private router:Router) { }

  ngOnInit(): void 
  {
    this.controlForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      query: new FormControl('', Validators.required)
    });
  }

  onSubmit()
  {
    console.log(this.controlForm.value);

    //this.contactInfo.email = this.controlForm.controls.email;
    this.contactUsService.addContactTask(this.controlForm.value).subscribe(res =>
    { 
 
    });
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-info',
  templateUrl: './reset-info.component.html',
  styleUrls: ['./reset-info.component.css']
})
export class ResetInfoComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false; 

  model: any = {};
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    }, {
      //validator: ConfirmPasswordValidator.MatchPassword
    }
    );
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {

    alert('Reset password link sent to your email!');
  }

}

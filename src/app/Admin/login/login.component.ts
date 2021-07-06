import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/Services/token-service.service';
import { AuthServicesService } from '../../Services/auth-services.service';
import { CustomerServicesService } from '../../Services/customer-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // model: any = {} //all the data of form
  // errMsg: string = ''

  // constructor( 
  //   private user: CustomerServicesService,
  //   private router: Router,
  //   private auth:AuthServicesService ) {}

  // ngOnInit(): void {
  // }
  // handleSubmit() {
  //   this.user.login(this.model)
  //     .subscribe(user => {
  //       console.log(user);
  //       this.auth.storeUser(user);
  //       this.router.navigate(['/tasks'])
  //     }, err => {
  //       this.errMsg = err.error.msg
  //     })
  // }
//}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Router } from '@angular/router';
// import { CustomerServicesService } from '../Services/customer-services.service';
 
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
 
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   submitted: boolean = false;
//   loginError = '';
 
//   constructor(private fb: FormBuilder,
//     private apiService: CustomerServicesService,
//     private router: Router) { }
 
//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       userEmail: ['', [Validators.required, Validators.email]],
//       userPassword: ['', [Validators.required]],
//       rememberMe: false
//     });
 
//     if (sessionStorage.getItem('loginStatus') === 'true'){
//       this.router.navigate(['admin/news-list']);
//     }
//   }
 
//   get f() {
//     return this.loginForm.controls;
//   }
 
//   userLogin() {
//     this.submitted = true;
//     if (this.loginForm.invalid) {
//       return
//     }
 
//     this.apiService.login(this.f.userEmail.value.toLowerCase(), this.f.userPassword.value).subscribe((response: { token: string; name: string; email: string; }) => {
//       if (response.token){
//         sessionStorage.setItem("loginStatus", "true");
//         sessionStorage.setItem("token",response.token);
//         sessionStorage.setItem("name", response.name);
//         sessionStorage.setItem("email", response.email);
//         this.router.navigate(['admin/news-list']);
//       }
//     },
//     (err: { error: { msg: string; }; }) => {
//       this.loginError = err.error.msg;
//     });
 
//   }
form: any = {
  username: null,
  password: null
};
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];

constructor(private authService: AuthServicesService, private tokenStorage: TokenServiceService) { }

ngOnInit(): void {
  if (this.tokenStorage.getToken()) {
    this.isLoggedIn = true;
    this.roles = this.tokenStorage.getUser().roles;
  }
}

onSubmit(): void {
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    },
    err => {
      console.log(err)
      console.log("Failed");
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

reloadPage(): void {
  window.location.reload();
}

}

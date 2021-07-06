import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddnewNewsComponent } from './addnew-news/addnew-news.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Admin/login/login.component';
import { NewsListComponent } from './Admin/news-list/news-list.component';
import { RegisterComponent } from './Admin/register/register.component';
import { SportsComponent } from './sports/sports.component';
import { ResetInfoComponent } from './Admin/reset-info/reset-info.component';
import { EditNewsComponent } from './Admin/news-list/edit-news/edit-news.component';

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },

  {
    path: 'sports' ,
    component: SportsComponent
  },
  {
    path: 'contactUs' ,
    component: ContactUsComponent
  },
  {
    path: 'signUp' ,
    component: RegisterComponent
  },
  {
    path: 'signIn' ,
    component: LoginComponent
  },
  {
    path: 'logIn' ,
    component: NewsListComponent
  },{
  path:'addNews',
  component: AddnewNewsComponent
  },{
    path: 'add',
    component: NewsListComponent
  },{
    path: 'reset',
    component: ResetInfoComponent
  },
  {
    path: 'editNews',
    component: EditNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

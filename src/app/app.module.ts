import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { ChatBoxComponent } from './home/chat-box/chat-box.component';
import { HeaderComponent } from './header/header.component';
import { WeatherReportComponent } from './home/weather-report/weather-report.component';
import { FooterComponent } from './footer/footer.component';
import { ImageGalleryComponent } from './home/image-gallery/image-gallery.component';
import { RegisterComponent } from './Admin/register/register.component';
import { LoginComponent } from './Admin/login/login.component';
import { AddnewNewsComponent } from './addnew-news/addnew-news.component';
import { DataViweListComponent } from './data-view-list/data-viwe-list.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './Admin/news-list/news-list.component';
import { ResetInfoComponent } from './Admin/reset-info/reset-info.component';
import { EditNewsComponent } from './Admin/news-list/edit-news/edit-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    AboutUsComponent,
    ContactUsComponent,
    LatestNewsComponent,
    ChatBoxComponent,
    HeaderComponent,
    WeatherReportComponent,
    FooterComponent,
    ImageGalleryComponent,
    RegisterComponent,
    LoginComponent,
    AddnewNewsComponent,
    DataViweListComponent,
    LoginHeaderComponent,
    AdminHeaderComponent,
    NewsListComponent,
    ResetInfoComponent,
    EditNewsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

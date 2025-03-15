import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { IphoneComponent } from './iphone/iphone.component';
import { CarsComponent } from './cars/cars.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    IphoneComponent,
    CarsComponent,
    ApartmentsComponent,
    MentorshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToTopComponent,
    ContactComponent,
    CommonModule,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
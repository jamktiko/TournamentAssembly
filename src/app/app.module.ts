import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourviewComponent } from './tourview/tourview.component';
import { FormsModule } from '@angular/forms';
import { TourselectorComponent } from './tourselector/tourselector.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, TourviewComponent, TourselectorComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

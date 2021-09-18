import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SideBarComponent } from './home/side-bar/side-bar.component'; 
import { MainComponent } from './home/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent, 
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

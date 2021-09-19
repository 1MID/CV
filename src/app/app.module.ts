import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//local comp
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './home/side-bar/side-bar.component'; 
import { MainComponent } from './home/main/main.component';
import { CustomizeCarouselComponent } from './home/main/customize-carousel/customize-carousel.component';
import { SkillsContainerComponent } from './home/main/skills-container/skills-container.component';
import { CustomizeCardComponent } from './home/main/skills-container/customize-card/customize-card.component';
import { ExperienceStepperComponent } from './home/main/experience-stepper/experience-stepper.component';

//lib 
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent, 
    MainComponent,
    CustomizeCarouselComponent,
    SkillsContainerComponent,
    CustomizeCardComponent,
    ExperienceStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

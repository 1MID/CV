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
import { TechnologyStackComponent } from './home/main/technology-stack/technology-stack.component';
import { environment } from 'src/environments/environment';

//lib 
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent, 
    MainComponent,
    CustomizeCarouselComponent,
    SkillsContainerComponent,
    CustomizeCardComponent,
    ExperienceStepperComponent,
    TechnologyStackComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

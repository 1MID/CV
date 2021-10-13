import { Component, OnInit } from '@angular/core';
import { SubjectBridgeService } from 'src/app/service/subject-bridge.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private subjectBridgeService:SubjectBridgeService) { }

  elementArr:string[] = ['sectionCarousel','sectionAbout','sectionExperience','mediumPost']

  ngOnInit(): void {
    this.subjectBridgeService.routeToSection$.subscribe(res=>{
      let el = document.getElementById(this.elementArr[res]);
      el != null ? el.scrollIntoView({behavior: "smooth"}) : null;
    })
  }


}

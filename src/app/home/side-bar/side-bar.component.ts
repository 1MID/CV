import { Component, OnInit } from '@angular/core';
import { SubjectBridgeService } from 'src/app/service/subject-bridge.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private subjectBridgeService:SubjectBridgeService) { }

  ngOnInit(): void {
  }

  routeToSection(index:number){ 
    this.subjectBridgeService.routeToSectionChange(index);
  }

}

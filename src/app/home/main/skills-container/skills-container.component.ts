import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss']
})
export class SkillsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillObj =[
    {path:'assets/icon/person_outline_black_24dp.svg',title:'Profile',content:'My name is Ray Yeh, I was born in the date of August 29, 1998.\nMy friend say that I am an easygoing and helpful person,I feel the same way...lol'},
    {path:'assets/icon/school_black_24dp.svg',title:'Educational',content:'Nation Yunlin University of Science & Technology\nComputer Science and Information Engineering'},
    {path:'assets/icon/outlined_flag_black_24dp.svg',title:'Goal',content:'Short-term goal:keep studing to improve myself\nMid-term:become a senior engineer ,and I will do it as well as I can'},
    {path:'assets/icon/thumb_up_black_24dp.svg',title:'Motto',content:'Better to do something imperfectly than to do nothing flawlessly.\nJourney of a thousand miles begins with single step.'}
  ]

}

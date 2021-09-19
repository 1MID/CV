import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-card',
  templateUrl: './customize-card.component.html',
  styleUrls: ['./customize-card.component.scss']
})
export class CustomizeCardComponent implements OnInit { 
  
  @Input() itemObj:skillObj = {path:'',title:'',content:''};

  constructor() { }

  ngOnInit(): void {
  }



}

interface skillObj {
  path: string;
  title: string;
  content: string;
}
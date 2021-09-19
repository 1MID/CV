import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  } 


  images = [
    {path: '/assets/slide-img/3.jpg'},
    {path: '/assets/slide-img/4.jpg'},
    {path: '/assets/slide-img/5.png'},
  ]

}


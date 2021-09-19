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
    {path: 'assets/slide-img/1.jpg'},
    {path: 'assets/slide-img/2.jpg'},
    {path: 'assets/slide-img/3.jpg'},
  ]

}


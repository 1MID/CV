import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-carousel',
  templateUrl: './customize-carousel.component.html',
  styleUrls: ['./customize-carousel.component.scss']
})
export class CustomizeCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  images = [
    {path: 'assets/slide-img/1.jpg'},
    {path: 'assets/slide-img/2.jpg'},
    {path: 'assets/slide-img/3.jpg'},
  ]
}

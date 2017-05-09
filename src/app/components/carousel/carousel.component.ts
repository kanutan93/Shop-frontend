import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    'banner5.png',
    'banner6.png',
    'banner7.png',
    'banner8.png',
  ];
  constructor() { }

  ngOnInit() {
  }
}

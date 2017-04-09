import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    'FEATURE-BANNER-REBECCA-CAIRNS.jpg',
    'Header-Jeremy-Okai-Davis.jpg',
    'WeWantYou.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }
}

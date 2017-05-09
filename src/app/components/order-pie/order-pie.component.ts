import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'order-pie',
  templateUrl: 'order-pie.component.html',
  styleUrls: ['order-pie.component.css']
})
export class OrderPieComponent implements OnInit {
  @Input() countGoods: number;
  constructor() { }

  ngOnInit() {
  }

}

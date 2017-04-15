import { Component, OnInit } from '@angular/core';
import {Good} from "../../models/Good";

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {
  items: Good[];
  constructor() { }

  ngOnInit() {
  }

}

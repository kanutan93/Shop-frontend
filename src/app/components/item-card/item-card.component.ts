import {Component, OnInit, Input} from '@angular/core';
import {Good} from "../../models/Good";

@Component({
  selector: 'item-card',
  templateUrl: 'item-card.component.html',
  styleUrls: ['item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Good;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Good} from "../../models/Good";

@Component({
  selector: 'item-card',
  templateUrl: 'item-card.component.html',
  styleUrls: ['item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Good;
  @Output() onInfoClick: EventEmitter<Good> = new EventEmitter<Good>();
  constructor() { }

  ngOnInit() {
  }

  onInfo(item){
    this.onInfoClick.emit(item);
  }
}

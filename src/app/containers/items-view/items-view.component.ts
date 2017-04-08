import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../services/items/items.service";
import {Observable} from "rxjs";
import {Good} from "../../models/Good";

@Component({
  selector: 'items-view',
  templateUrl: 'items-view.component.html',
  styleUrls: ['items-view.component.css']
})
export class ItemsViewComponent implements OnInit {
  items: Observable<Good[]>;
  constructor(private itemsService: ItemsService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      console.log(res['id']);
      this.items = this.itemsService.getGoods("", res['id']);
    })
  }

  ngOnInit() {
  }

}

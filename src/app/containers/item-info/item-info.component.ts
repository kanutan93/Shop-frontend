import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../services/items/items.service";
import 'rxjs';
import {Good} from "../../models/Good";

@Component({
  selector: 'item-info',
  templateUrl: 'item-info.component.html',
  styleUrls: ['item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  item: Good;
  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let route$ = this.route.params.map(res => res.id);
    route$
      .do((id) =>this.item = this.itemsService.fetchGood(id)).subscribe();
  }
}

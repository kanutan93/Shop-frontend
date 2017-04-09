import {Component, OnInit, Input} from '@angular/core';
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
  result: Observable<Good[]>;
  goods: Good[];
  @Input() itemsNumber: number;
  constructor(private itemsService: ItemsService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      console.log(res['id']);
      this.result= this.itemsService.getGoods("", res['id']);
    });

    this.result.subscribe(res => {
      if(this.itemsNumber){
        this.goods = res.slice(res.length - this.itemsNumber, res.length);
      }
      else {
        this.goods = res;
      }
    })
  }

  ngOnInit() {

  }

}

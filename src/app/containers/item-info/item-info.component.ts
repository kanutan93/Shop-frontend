import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../services/api/items/items.service";
import 'rxjs';
import {Good} from "../../models/Good";
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";
import {ShoppingCart} from "../../models/ShoppingCart";

@Component({
  selector: 'item-info',
  templateUrl: 'item-info.component.html',
  styleUrls: ['item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  item: Good;
  constructor(private itemsService: ItemsService,
              private route: ActivatedRoute,
              private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    let route$ = this.route.params.map(res => res.id);
    route$
      .do((id) =>this.item = this.itemsService.fetchGood(id)).subscribe();
  }

  addToCart(name, price, count){
    let shoppingCart: ShoppingCart;
    shoppingCart = {name: name, price: price, count: count};
    this.shoppingCartService.addToCart(shoppingCart);
  }
}

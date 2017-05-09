import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";
import {ShoppingCart} from "../../models/ShoppingCart";

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {
  items: ShoppingCart[];
  constructor(private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
  }

  removeFromCart(name){
    this.shoppingCartService.removeFromCart(name);
    //FIXME В сервисе!
    this.items = this.items.filter((items) => {
      return items.name != name;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";
import {ShoppingCart} from "../../models/ShoppingCart";
import {Order} from "../../models/Order";
import {OrdersService} from "../../services/api/orders/orders.service";

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {
  items: ShoppingCart[];
  public alerts: any = [];
  constructor(private shoppingCartService: ShoppingCartService,
              private orderService: OrdersService) {

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

  checkout(email, name, lastname, address){
    let order: Order = {email:email, name:name, lastname:lastname, address:address, shoppingCart:this.items};
    this.orderService.createOrder(order);
    this.shoppingCartService.setNull();
    this.items = [];
    this.showSuccess();
  }

  public showSuccess(): void {
    this.alerts.push({
      type: 'success',
      msg: `Thank you for order. We'll reply soon.`,
      timeout: 7000
    });
  }
}

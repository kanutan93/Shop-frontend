import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {OrdersService} from "./orders.service";
import 'rxjs/add/operator/map';
import {environment} from "../../../../environments/environment";
import {Order} from "../../../models/Order";

@Injectable()
export class OrdersServiceImpl extends OrdersService{
  constructor(protected httpService: Http) {
    super(httpService);
  }

  createOrder(order: Order): void{
    let url = "order/new";
    this.httpService.post(environment.api + url, order).subscribe()
  }

}

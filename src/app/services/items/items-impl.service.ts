import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {ItemsService} from "./items.service";
import {Good} from "../../models/Good";
import 'rxjs/add/operator/map';
import {environment} from "../../../environments/environment";

@Injectable()
export class ItemsServiceImpl extends ItemsService{

  constructor(protected httpService: Http) {
    super(httpService);
  }

  getGoods(page: string, search?: string): Observable<Good[]>{
    let url = "good"
      .concat(search ? "?search=" + search + "&" : "")
      .concat(page ? "?page=" + page : "?page=1");

    return this.httpService.get(environment.api + url).map(res => res.json());
  }
}

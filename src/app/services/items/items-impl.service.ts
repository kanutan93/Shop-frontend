import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {ItemsService} from "./items.service";
import {Good} from "../../models/Good";
import 'rxjs/add/operator/map';
import {environment} from "../../../environments/environment";

@Injectable()
export class ItemsServiceImpl extends ItemsService{
  items:Good[] = [];
  items$: Observable<Good[]>;
  constructor(protected httpService: Http) {
    super(httpService);
  }

  getGoods(page?: string, search?: string): Observable<Good[]>{
    let url = "good"
      .concat(search ? "?search=" + search : "")
      .concat(page ? "?page=" + page : "?page=1");

    this.items$ = this.httpService.get(environment.api + url)
      .do(res => this.items = res.json())
      .map(res => res.json());
    return this.items$;
  }

  //TODO сделать проверку на наличие кэша
  fetchGood(search: string): Good{
    return this.findGoodFromCache(search)[0];
  }

  findGoodFromCache(search: string){
    return this.items.filter((item) => {
      return item.imageLink === search;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ShoppingCartService} from "../../services/shopping-cart/shopping-cart.service";

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  cardCount: number = 0;
  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.getCart().subscribe((items) => {
      if (items) this.cardCount = items.length;
    })
  }

  ngOnInit() {
  }

  changeCategory(category: string){
    this.router.navigate([category]);
  }
}

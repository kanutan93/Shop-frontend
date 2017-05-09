import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { ItemsViewComponent } from './containers/items-view/items-view.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsServiceImpl} from "./services/api/items/items-impl.service";
import {ItemsService} from "./services/api/items/items.service";
import {Routes, RouterModule} from "@angular/router";
import { CategoryComponent } from './components/category/category.component';
import { MainComponent } from './containers/main/main.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {CarouselModule, AlertModule} from 'ngx-bootstrap';
import { LogoComponent } from './components/logo/logo.component';
import { ItemInfoComponent } from './containers/item-info/item-info.component';
import { OrderPieComponent } from './components/order-pie/order-pie.component';
import { OrderComponent } from './containers/order/order.component';
import {ShoppingCartService} from "./services/shopping-cart/shopping-cart.service";
import {OrdersService} from "./services/api/orders/orders.service";
import {OrdersServiceImpl} from "./services/api/orders/orders-impl.service";

const routes: Routes =[
  {path: '', component: MainComponent},
  {path: 'shop', component: ItemsViewComponent},
  {path: 'shop/:id', component: ItemsViewComponent},
  {path: 'good/:id', component: ItemInfoComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'order', component: OrderComponent},
  {path: 'contact', component:ContactComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ItemsViewComponent,
    ItemCardComponent,
    CategoryComponent,
    MainComponent,
    FaqComponent,
    ContactComponent,
    CarouselComponent,
    LogoComponent,
    ItemInfoComponent,
    OrderPieComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CarouselModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    {provide: ItemsService, useClass: ItemsServiceImpl},
    {provide: OrdersService, useClass: OrdersServiceImpl},
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

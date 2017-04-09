import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { ItemsViewComponent } from './containers/items-view/items-view.component';
import { ItemCardComponent } from './containers/item-card/item-card.component';
import { ItemsServiceImpl} from "./services/items/items-impl.service";
import {ItemsService} from "./services/items/items.service";
import {Routes, RouterModule} from "@angular/router";
import { CategoryComponent } from './components/category/category.component';
import { MainComponent } from './containers/main/main.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { LogoComponent } from './components/logo/logo.component';

const routes: Routes =[
  {path: '', component: MainComponent},
  {path: 'shop', component: ItemsViewComponent},
  {path: 'shop/:id', component: ItemsViewComponent},
  {path: 'good/:id', component: ItemCardComponent},
  {path: 'faq', component:FaqComponent},
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
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  providers: [
    {provide: ItemsService, useClass: ItemsServiceImpl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

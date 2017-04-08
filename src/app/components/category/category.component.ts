import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = ['shop', 'faq', 'contact'];
  @Output() changeCategoryClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  changeCategory(category: string){
    this.changeCategoryClick.emit(category);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/Category";

@Component({
  selector: 'app-category-products-area',
  templateUrl: './category-products-area.component.html',
  styleUrls: ['./category-products-area.component.scss']
})
export class CategoryProductsAreaComponent implements OnInit {
  @Input() selectedCategory : Category | undefined;
  @Input() tabs : any;
  @Input() errorFlag : any;
  constructor() { }
  products : any[] = [];
  ngOnInit(): void {
  }

  deleteProduct(index: number) {
    const cat = this.tabs.find((t: Category) => t.name === this.selectedCategory?.name);
    if (!!cat && cat.products) {
      cat.products?.splice(index, 1);
      if (cat.products?.length === 0) {
        this.errorFlag = true;
      }
    }
  }


}

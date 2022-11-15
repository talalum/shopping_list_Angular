import {Component, OnInit} from '@angular/core';
import {Categories} from "../../models/enums";
import {Category} from "../../models/Category";
import {FormBuilder, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-super-market-list',
  templateUrl: './super-market-list.component.html',
  styleUrls: ['./super-market-list.component.scss']
})
export class SuperMarketListComponent implements OnInit {

  public tabs: Category[] = [
    {
      name: Categories.MeatAndFish,
      products: ['reere', 'b', 'aasasasa']
    },
    {
      name: Categories.GrainsAndBread,
      products: ['qwsadaz`', 'bb']
    },
    {
      name: Categories.Condiments,
      products: ['awwqw', 'bbb']
    },
    {
      name: Categories.Tinned,
      products: ['aaa', 'bbbb']
    },
    {
      name: Categories.OilAndFat,
      products: ['aczzz', 'bbbbbad']
    },
    {
      name: Categories.DairyAndEggs,
      products: ['asfxxa', 'asfasb']
    },
  ];
  public selectedCategory: Category | undefined;
  public errorFlag: boolean = false;
  public productName!: FormControl;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.selectedCategory = this.tabs[0];
    console.log(this.tabs)
    this.productName = this.fb.control(null, [
      Validators.required,
    ]);
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory = category;
  }

  deleteProduct(index: number) {
    const cat = this.tabs.find((t: Category) => t.name === this.selectedCategory?.name);
    if (!!cat && cat.products) {
      cat.products?.splice(index, 1);
      console.log(cat.products)
      if (cat.products?.length === 0) {
        this.errorFlag = true;
      }
    }
  }

  addProduct(productName: FormControl) {
    const cat = this.tabs.find((t: Category) => t.name === this.selectedCategory?.name);
    if (!!cat && !!cat.products && !!productName.value) {
      console.log(productName.value);
      // console.log(this.productName.value);
      cat.products?.push(productName.value);
      this.productName = this.fb.control(null, [
        Validators.required,
      ]);
      this.errorFlag = false;
    }
  }
}

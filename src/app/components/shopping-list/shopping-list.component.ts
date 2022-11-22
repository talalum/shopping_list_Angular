import {Component, OnInit} from '@angular/core';
import {Categories} from "../../models/enums";
import {Category} from "../../models/Category";
import {FormBuilder, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public tabs: Category[] = [
    {
      name: Categories.MeatAndFish,
      products: ['Skinless white meat', 'Lean cuts of red meat', 'Tuna', 'Salmon', 'Mackerel', 'Luncheon meat']
    },
    {
      name: Categories.GrainsAndBread,
      products: ['Pasta', 'Rise', 'Bread']
    },
    {
      name: Categories.Condiments,
      products: ['Salt', 'Pepper', 'Basil', 'Coriander', 'Cumin']
    },
    {
      name: Categories.Tinned,
      products: ['Red kidney beans', 'White beans', 'Green lentils']
    },
    {
      name: Categories.OilAndFat,
      products: ['Cooking oil', 'Butter']
    },
    {
      name: Categories.DairyAndEggs,
      products: ['Milk', 'Eggs', 'Cheese', 'Yogurt']
    },
  ];
  public selectedCategory: Category = this.tabs[0];
  public errorFlag: boolean = false;
  public errorNameFlag: boolean = false;
  public productName!: FormControl;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
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
      if (cat.products?.length === 0) {
        this.errorFlag = true;
      }
    }
  }

  addProduct(productName: FormControl) {
    const cat = this.tabs.find((t: Category) => t.name === this.selectedCategory?.name);
    if (!!cat && !!cat.products && !!productName.value) {
      cat.products?.push(productName.value);
      this.productName = this.fb.control(null, [
        Validators.required,
      ]);
      this.errorFlag = false;
      this.errorNameFlag = false;
    }else{
      this.errorNameFlag = true;
    }
  }

  // download (data: any) {
  //
  //   // Creating a Blob for having a csv file format
  //   // and passing the data with type
  //   const blob = new Blob([data], { type: 'text/csv' });
  //
  //   // Creating an object for downloading url
  //   const url = window.URL.createObjectURL(blob)
  //
  //   // Creating an anchor(a) tag of HTML
  //   const a = document.createElement('a')
  //
  //   // Passing the blob downloading url
  //   a.setAttribute('href', url)
  //
  //   // Setting the anchor tag attribute for downloading
  //   // and passing the download file name
  //   a.setAttribute('download', 'shopping_list.csv');
  //
  //   // Performing a download with click
  //   a.click()
  // }
  //
  //  csvmaker (data: any) {
  //
  //   // Empty array for storing the values
  //   const csvRows = [];
  //
  //   // Headers is basically a keys of an
  //   // object which is id, name, and
  //   // profession
  //   const headers = Object.keys(data);
  //
  //   // As for making csv format, headers
  //   // must be separated by comma and
  //   // pushing it into array
  //   csvRows.push(headers.join(','));
  //
  //   // Pushing Object values into array
  //   // with comma separation
  //   const values = Object.values(data).join(',');
  //   csvRows.push(values)
  //    console.log(csvRows)
  //
  //   // Returning the array joining with new line
  //   return csvRows.join('\n')
  // }
  //
  // async getCsv() {
  //   // MeatAndFish = 'Meat & Fish',
  //   //   GrainsAndBread = 'Grains and Bread',
  //   //   Condiments = 'Condiments',
  //   //   Tinned = 'Tinned & Dried Produce',
  //   //   OilAndFat = 'Oil & Fat',
  //   //   DairyAndEggs = 'Dairy & Eggs'
  //   // const data2 = {
  //   //   'Meat&Fish': this.tabs[0].products,
  //   //   'Grains and Bread': this.tabs[1].products,
  //   //   'Condiments': this.tabs[2].products,
  //   //   'Tinned & Dried Produce': this.tabs[3].products,
  //   //   'Oil & Fat': this.tabs[4].products,
  //   //   'Dairy & Eggs': this.tabs[5].products,
  //   // }
  //   // JavaScript object
  //   const data = {
  //     id: 1,
  //     name: ["Geeks", "a"],
  //     profession: "developer"
  //   }
  //
  //   const csvdata = this.csvmaker(data);
  //   this.download(csvdata);
  // }


  download(data: any) {

    // Creating a Blob for having a csv file format
    // and passing the data with type
    const blob = new Blob([data], {type: 'text/csv'});

    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)

    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')

    // Passing the blob downloading url
    a.setAttribute('href', url)

    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'download.csv');

    // Performing a download with click
    a.click()
  }

  csvmaker() {
    // Empty array for storing the values
    const csvRows = [];

    // Headers is basically a keys of an
    // object which is id, name, and
    // profession
    const headers = [Categories.MeatAndFish, Categories.GrainsAndBread, Categories.Condiments, Categories.Tinned, Categories.OilAndFat, Categories.DairyAndEggs];

    // As for making csv format, headers
    // must be separated by comma and
    // pushing it into array
    csvRows.push(headers.join(','));
    console.log(headers.join(','))

    // Pushing Object values into array
    // with comma separation
    let maxLen = 0;
    this.tabs.forEach(t => {
      if (!!t.products && t.products?.length > maxLen) {
        maxLen = t.products?.length;
      }
    });
    for (let j = 0; j <= maxLen; j++) {
      const row = [];
      for (let i = 0; i <= 5; i++) {
        if (!this.tabs[i].products[j]) {
          row.push('');
        } else {
          row.push(this.tabs[i].products[j]);
        }
      }
    csvRows.push(row)
    }
    // Returning the array joining with new line
    return csvRows.join('\n')
  }

  async getCsv() {
    // JavaScript object
    const csvdata = this.csvmaker();
    this.download(csvdata);
  }

// Getting element by id and adding
// eventlistener to listen everytime
// button get pressed
//   const btn = document.getElementById('action');
//   btn.addEventListener('click', get);

}

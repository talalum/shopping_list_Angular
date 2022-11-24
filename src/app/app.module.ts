import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryProductsAreaComponent } from './components/category-tab/category-products-area.component';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoryProductsAreaComponent,
    ShoppingListComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

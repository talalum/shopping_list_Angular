import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryTabComponent } from './components/category-tab/category-tab.component';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ShoppingListComponent } from './components/super-market-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryTabComponent,
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

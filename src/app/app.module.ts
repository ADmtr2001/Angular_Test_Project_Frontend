import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DishesPageComponent } from './pages/dishes-page/dishes-page.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { DishesItemComponent } from './components/dishes-list/dishes-item/dishes-item.component';
import { SelectedDishModalContentComponent } from './components/modal/selected-dish-modal-content/selected-dish-modal-content.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FiltersComponent,
    DishesPageComponent,
    DishesListComponent,
    DishesItemComponent,
    SelectedDishModalContentComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

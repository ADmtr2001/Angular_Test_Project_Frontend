import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material-module/material.module";

import {ShoppingCartPageComponent} from "./pages/shopping-cart-page/shopping-cart-page.component";

const ShoppingCartComponents = [
  ShoppingCartPageComponent
];

@NgModule({
  declarations: [ShoppingCartComponents],
  exports: [ShoppingCartComponents],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCartModule {
}
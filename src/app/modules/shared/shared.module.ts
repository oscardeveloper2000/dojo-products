import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class SharedModule { }

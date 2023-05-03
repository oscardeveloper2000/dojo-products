import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  exports: [
    ShoppingCartComponent,
    OverlayModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
  ]
})
export class SharedModule { }

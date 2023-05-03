import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Product } from '@models/product.model';
interface InputData {
  products: Product[];
}

interface OutputData {
  rta: boolean;
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  products: Product[] = [];
  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.products = data.products;
    console.log('this.products :>> ', this.products);
  }

  close() {
    this.dialogRef.close();
  }

}

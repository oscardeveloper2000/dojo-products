import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { ShoppingCartService } from '@services/shopping-cart.service';
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
export class ShoppingCartComponent  implements OnInit{
  products: Product[] = [];
  totalPrice: number = 0;
  constructor(
    private shoppingCartService: ShoppingCartService,
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.products = data.products;

    console.log('this.products :>> ', this.products);

  }
  ngOnInit(): void {
    this.shoppingCartService.totalShoppingCart$
    .subscribe((totalPrice) => {
      this.totalPrice = totalPrice;
    })
  }

  close() {
    this.dialogRef.close();
  }

  onRemoveProduct(product: Product){
    this.shoppingCartService.removeProduct(product);
  }

}

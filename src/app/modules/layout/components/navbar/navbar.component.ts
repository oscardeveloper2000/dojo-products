import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Product } from '@models/product.model';
import { ShoppingCartComponent } from '@shared/components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  products : Product[] = [];
  constructor(
    private dialog: Dialog
  ){}

  openDialog(products: Product[]) {
    console.log("entramos");
    const dialogRef = this.dialog.open(ShoppingCartComponent, {
      minWidth: '300px',
      maxWidth : '50%',
      data: {
        products: products,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}

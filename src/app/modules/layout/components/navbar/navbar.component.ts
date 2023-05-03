import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { ShoppingCartService } from '@services/shopping-cart.service';
import { ShoppingCartComponent } from '@shared/components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  productsOnCart : Product[] = [];
  counter: Number | null = null;

  constructor(
    private dialog: Dialog,
    private shoppingCartService: ShoppingCartService,
  ){}
  ngOnInit(): void {
    this.shoppingCartService.myCart$
    .subscribe((productsList) => {
      console.log('productsList :>> ', productsList);
      this.productsOnCart = productsList;
      this.counter = productsList.reduce((sum) => sum + 1, 0);

    });
  }

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

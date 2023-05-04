import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  totalPrice: number = 0;

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  private totalShoppingCart = new BehaviorSubject<number>(0);

  myCart$ = this.myCart.asObservable();
  totalShoppingCart$ = this.totalShoppingCart.asObservable();

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
    this.getTotal();
  }

  removeProduct(product: Product){
    const index = this.myShoppingCart.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.getTotal()
      console.log('this.totalPrice :>> ', this.totalPrice);
      console.log('product.price :>> ', product.price);
      this.totalShoppingCart.next(this.totalPrice - product.price);
      this.myShoppingCart.splice(index, 1);
      this.myCart.next(this.myShoppingCart);
    }
  }


  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    this.totalPrice = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    this.totalShoppingCart.next(this.totalPrice);
  }
}

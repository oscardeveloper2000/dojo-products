import { Component, OnInit } from '@angular/core';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Product } from '@models/product.model';
import { ShoppingCartService } from '@services/shopping-cart.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  displayedColumns: string[] = ['image', 'title', 'description', 'price', 'actions']
  dataSource = new DataSourceProduct();
  inputFilter = new FormControl('', { nonNullable: true });

  constructor(
    private productService : ProductService,
    private shoppingCartService: ShoppingCartService,
  ){}
  ngOnInit(): void {
    this.productService.products$
    .subscribe(products => {
      this.dataSource.init(products)
    });

    this.inputFilter.valueChanges
    .subscribe(value => {
      this.dataSource.find(value);
    })
  }

  onAddShopping(product: Product){
    this.shoppingCartService.addProduct(product);
  }
}

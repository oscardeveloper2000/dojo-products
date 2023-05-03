import { Component, OnInit } from '@angular/core';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private productService: ProductService
  ){}
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((products) => {
      console.log('products :>> ', products);
    });
  }

}

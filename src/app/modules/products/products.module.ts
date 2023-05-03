import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '@models/product.model';

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[]= [];

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(data: Product[]) {
    this.originalData = data;
    this.data.next(data);
  }

  find(query: string) {
    const filterProducts = this.originalData
    .filter(item => {
      const word = `${item.title}`;
      return word.toLowerCase().includes(query.toLowerCase())
    });
    this.data.next(filterProducts);
  }

  disconnect() { }

}

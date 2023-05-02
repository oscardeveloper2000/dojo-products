import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Product } from '../models/product.model';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.API_URL;
  products$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
    .pipe(
      tap(products => {
        this.products$.next(products);
      })
    )
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/stockmysql/products/';
  constructor(
    private http: HttpClient
  ) {
    console.log("construtor do prod service");
  }

  public getAll() {
    return this.http.get(this.url);
  }

  public create(product: Product) {
    return this.http.post(this.url, product);
  }

  public get(id: number) {
    return this.http.get(this.url + id);
  }

  public update(product: any) {
    return this.http.put(this.url, product);
  }

  public delete(id: number) {
    return this.http.delete(this.url + id);
  }
}

import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public products: any[];
public products$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private productApi: ProductService
  ) { 
    this.getProducts();
    console.log("construtor do data service");
  }

  public getProducts(){
    this.productApi.getAll().subscribe(
    (res:any) => {
      this.products=res;
      this.products$.next(res);
    })
  }

public createProduct(product: Product): any{
this.productApi.create(product).subscribe();
}
 
  
}

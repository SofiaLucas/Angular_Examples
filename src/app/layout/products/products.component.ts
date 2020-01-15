import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/services/data/data.service';
import { ReplaySubject, Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductService } from '../shared/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products$: ReplaySubject<any[]>
  public product = new Product();
  public productId: number;

  public msgById: string;

  private subProducts: Subscription;
  constructor(
    private data: DataService,
    // private productService: ProductService
  ) {
    this.products$ = data.products$;
    this.subProducts = this.products$.subscribe((products) => console.log(products)); // nao é necessario
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subProducts.unsubscribe;
  }

  public create() {
    const data = {
        pvp: 10,
      iva: 23,
      discount: 0,
      shelfIds: []
    };
    const product = new Product(data);
    this.data.createProduct(product);

  }

  public getAll(){
  this.data.getProducts();
  }
  
public getById(){
  let id = 2;
  this.data.getById(id);
}


}

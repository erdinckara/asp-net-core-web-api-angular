import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(name: string,price: number,isactive: boolean)
  {
    const p = new Product(0,name,price,isactive);
    this.productService.saveProduct(p);
  }

}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }
}

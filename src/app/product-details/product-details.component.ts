import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../log.service';
import { emptyProduct, Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: Product;

  constructor(
    // inject router to navigate to not-found page
    private router: Router,
    log: LogService,
    activatedRoute: ActivatedRoute,
    productsService: ProductsService
  ) {
    const productId = Number(activatedRoute.snapshot.params['productId']);
    const product = productsService.getProduct(productId);

    log.debug(
      `Product with id ${productId} is ${product ? 'found' : 'not found'}`
    );

    if (!product) {
      this.product = emptyProduct();
      this.router.navigate(['/not-found']);
    } else {
      this.product = product;
    }
  }
}

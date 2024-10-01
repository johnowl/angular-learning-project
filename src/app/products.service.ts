import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private log: LogService) {}

  getProducts(): Product[] {
    this.log.info('Getting products');
    return [
      {
        id: 1,
        name: 'Phone XL',
        price: 799,
      },
      {
        id: 2,
        name: 'Phone Mini',
        price: 699,
      },
      {
        id: 3,
        name: 'Phone Standard',
        price: 299,
      },
    ];
  }

  getProduct(id: number): Product | undefined {
    this.log.info(`Getting product with id ${id}`);
    this.log.debug(`Getting product with id ${id}`);
    this.log.error(`Getting product with id ${id}`);
    this.log.warn(`Getting product with id ${id}`);
    return this.getProducts().find((product) => product.id === id);
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export function emptyProduct(): Product {
  return {
    id: 0,
    name: '',
    price: 0,
  };
}

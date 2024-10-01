import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

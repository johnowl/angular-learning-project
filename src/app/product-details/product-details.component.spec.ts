import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                productId: '1',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to not-found when product is not found', () => {
    // Arrange
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    const productsService = TestBed.inject(ProductsService);
    spyOn(productsService, 'getProduct').and.returnValue(undefined);

    // Act
    fixture.detectChanges();

    // Assert
    expect(navigateSpy).toHaveBeenCalledWith(['/not-found']);
  });
});

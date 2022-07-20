import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListShellComponent } from './product-list-shell.component';

describe('ProductListShellComponent', () => {
  let component: ProductListShellComponent;
  let fixture: ComponentFixture<ProductListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

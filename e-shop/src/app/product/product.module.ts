import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListShellComponent } from './containers/product-list-shell/product-list-shell.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListShellComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

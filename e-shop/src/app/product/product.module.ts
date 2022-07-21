import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListShellComponent } from './containers/product-list-shell/product-list-shell.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ProductListShellComponent, ProductListComponent],
  imports: [CommonModule, ProductRoutingModule, HttpClientModule],
})
export class ProductModule {}

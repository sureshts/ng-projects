import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListShellComponent } from './containers/product-list-shell/product-list-shell.component';

const routes: Routes = [
  { path: '', component: ProductListShellComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

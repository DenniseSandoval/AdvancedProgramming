import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProductPage } from './menu-product.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuProductPageRoutingModule {}

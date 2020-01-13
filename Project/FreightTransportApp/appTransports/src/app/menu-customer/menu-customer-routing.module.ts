import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCustomerPage } from './menu-customer.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCustomerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcustomerPage } from './listcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: ListcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcustomerPageRoutingModule {}

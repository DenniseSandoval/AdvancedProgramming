import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatecustomerPage } from './updatecustomer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatecustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatecustomerPageRoutingModule {}

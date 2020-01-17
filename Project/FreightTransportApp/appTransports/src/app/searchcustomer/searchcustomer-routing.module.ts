import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchcustomerPage } from './searchcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchcustomerPageRoutingModule {}

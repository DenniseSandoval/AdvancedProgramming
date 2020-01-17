import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchcustomeridPage } from './searchcustomerid.page';

const routes: Routes = [
  {
    path: '',
    component: SearchcustomeridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchcustomeridPageRoutingModule {}

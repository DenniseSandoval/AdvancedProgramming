import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearclientdetailPage } from './searclientdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SearclientdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearclientdetailPageRoutingModule {}

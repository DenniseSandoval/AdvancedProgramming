import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddguidePage } from './addguide.page';

const routes: Routes = [
  {
    path: '',
    component: AddguidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddguidePageRoutingModule {}

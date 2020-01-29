import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteguidePage } from './deleteguide.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteguidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteguidePageRoutingModule {}

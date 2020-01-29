import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchguidePage } from './searchguide.page';

const routes: Routes = [
  {
    path: '',
    component: SearchguidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchguidePageRoutingModule {}

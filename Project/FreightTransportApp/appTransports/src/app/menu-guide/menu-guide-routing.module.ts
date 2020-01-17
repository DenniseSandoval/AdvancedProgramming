import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuGuidePage } from './menu-guide.page';

const routes: Routes = [
  {
    path: '',
    component: MenuGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuGuidePageRoutingModule {}

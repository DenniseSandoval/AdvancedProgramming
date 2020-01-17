import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuZonePage } from './menu-zone.page';

const routes: Routes = [
  {
    path: '',
    component: MenuZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuZonePageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuZonePageRoutingModule } from './menu-zone-routing.module';

import { MenuZonePage } from './menu-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuZonePageRoutingModule
  ],
  declarations: [MenuZonePage]
})
export class MenuZonePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCarrierPageRoutingModule } from './menu-carrier-routing.module';

import { MenuCarrierPage } from './menu-carrier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCarrierPageRoutingModule
  ],
  declarations: [MenuCarrierPage]
})
export class MenuCarrierPageModule {}

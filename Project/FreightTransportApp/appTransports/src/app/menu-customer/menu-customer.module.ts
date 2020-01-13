import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCustomerPageRoutingModule } from './menu-customer-routing.module';

import { MenuCustomerPage } from './menu-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCustomerPageRoutingModule
  ],
  declarations: [MenuCustomerPage]
})
export class MenuCustomerPageModule {}

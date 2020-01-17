import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProductPageRoutingModule } from './menu-product-routing.module';

import { MenuProductPage } from './menu-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProductPageRoutingModule
  ],
  declarations: [MenuProductPage]
})
export class MenuProductPageModule {}

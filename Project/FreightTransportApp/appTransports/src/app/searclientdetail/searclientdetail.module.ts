import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearclientdetailPageRoutingModule } from './searclientdetail-routing.module';

import { SearclientdetailPage } from './searclientdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearclientdetailPageRoutingModule
  ],
  declarations: [SearclientdetailPage]
})
export class SearclientdetailPageModule {}

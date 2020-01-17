import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecustomerPageRoutingModule } from './updatecustomer-routing.module';

import { UpdatecustomerPage } from './updatecustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecustomerPageRoutingModule
  ],
  declarations: [UpdatecustomerPage]
})
export class UpdatecustomerPageModule {}

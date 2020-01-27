import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcustomerPageRoutingModule } from './listcustomer-routing.module';

import { ListcustomerPage } from './listcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcustomerPageRoutingModule
  ],
  declarations: [ListcustomerPage]
})
export class ListcustomerPageModule {}

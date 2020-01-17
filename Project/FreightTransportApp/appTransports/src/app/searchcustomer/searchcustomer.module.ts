import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchcustomerPageRoutingModule } from './searchcustomer-routing.module';

import { SearchcustomerPage } from './searchcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchcustomerPageRoutingModule
  ],
  declarations: [SearchcustomerPage]
})
export class SearchcustomerPageModule {}

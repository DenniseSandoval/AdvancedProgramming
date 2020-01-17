import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchcustomeridPageRoutingModule } from './searchcustomerid-routing.module';

import { SearchcustomeridPage } from './searchcustomerid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchcustomeridPageRoutingModule
  ],
  declarations: [SearchcustomeridPage]
})
export class SearchcustomeridPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddguidePageRoutingModule } from './addguide-routing.module';

import { AddguidePage } from './addguide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddguidePageRoutingModule
  ],
  declarations: [AddguidePage]
})
export class AddguidePageModule {}

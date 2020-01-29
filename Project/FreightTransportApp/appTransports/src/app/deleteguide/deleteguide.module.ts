import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteguidePageRoutingModule } from './deleteguide-routing.module';

import { DeleteguidePage } from './deleteguide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteguidePageRoutingModule
  ],
  declarations: [DeleteguidePage]
})
export class DeleteguidePageModule {}

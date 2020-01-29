import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchguidePageRoutingModule } from './searchguide-routing.module';

import { SearchguidePage } from './searchguide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchguidePageRoutingModule
  ],
  declarations: [SearchguidePage]
})
export class SearchguidePageModule {}

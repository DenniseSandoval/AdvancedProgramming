import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuGuidePageRoutingModule } from './menu-guide-routing.module';

import { MenuGuidePage } from './menu-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuGuidePageRoutingModule
  ],
  declarations: [MenuGuidePage]
})
export class MenuGuidePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlucosaPageRoutingModule } from './glucosa-routing.module';

import { GlucosaPage } from './glucosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlucosaPageRoutingModule
  ],
  declarations: [GlucosaPage]
})
export class GlucosaPageModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConectModuloWifiPage } from './conect-modulo-wifi.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ChartModule } from 'angular2-chartjs';

import { ConectModuloWifiPageRoutingModule } from './conect-modulo-wifi-routing.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConectModuloWifiPageRoutingModule,
    ChartModule
  ],
  declarations: [ConectModuloWifiPage]
})
export class ConectModuloWifiPageModule {}

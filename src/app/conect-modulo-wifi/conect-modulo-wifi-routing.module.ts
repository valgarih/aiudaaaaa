import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConectModuloWifiPage } from './conect-modulo-wifi.page';

const routes: Routes = [
  {
    path: '',
    component: ConectModuloWifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConectModuloWifiPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlucosaPage } from './glucosa.page';

const routes: Routes = [
  {
    path: '',
    component: GlucosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlucosaPageRoutingModule {}

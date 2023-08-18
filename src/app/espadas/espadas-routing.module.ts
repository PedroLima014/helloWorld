import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspadasPage } from './espadas.page';

const routes: Routes = [
  {
    path: '',
    component: EspadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspadasPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SapatosPage } from './sapatos.page';

const routes: Routes = [
  {
    path: '',
    component: SapatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SapatosPageRoutingModule {}

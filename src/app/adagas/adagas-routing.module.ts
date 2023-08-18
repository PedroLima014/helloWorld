import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdagasPage } from './adagas.page';

const routes: Routes = [
  {
    path: '',
    component: AdagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdagasPageRoutingModule {}

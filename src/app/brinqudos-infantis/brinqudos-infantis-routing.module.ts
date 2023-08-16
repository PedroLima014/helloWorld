import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrinqudosInfantisPage } from './brinqudos-infantis.page';

const routes: Routes = [
  {
    path: '',
    component: BrinqudosInfantisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrinqudosInfantisPageRoutingModule {}

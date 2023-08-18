import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcosPage } from './arcos.page';

const routes: Routes = [
  {
    path: '',
    component: ArcosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcosPageRoutingModule {}

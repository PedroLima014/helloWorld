import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscudosPage } from './escudos.page';

const routes: Routes = [
  {
    path: '',
    component: EscudosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscudosPageRoutingModule {}

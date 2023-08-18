import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdagasPageRoutingModule } from './adagas-routing.module';

import { AdagasPage } from './adagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdagasPageRoutingModule
  ],
  declarations: [AdagasPage]
})
export class AdagasPageModule {}

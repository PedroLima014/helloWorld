import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrinqudosInfantisPageRoutingModule } from './brinqudos-infantis-routing.module';

import { BrinqudosInfantisPage } from './brinqudos-infantis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrinqudosInfantisPageRoutingModule
  ],
  declarations: [BrinqudosInfantisPage]
})
export class BrinqudosInfantisPageModule {}

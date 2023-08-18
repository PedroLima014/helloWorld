import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscudosPageRoutingModule } from './escudos-routing.module';

import { EscudosPage } from './escudos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscudosPageRoutingModule
  ],
  declarations: [EscudosPage]
})
export class EscudosPageModule {}

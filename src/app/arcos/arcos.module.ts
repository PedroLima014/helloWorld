import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcosPageRoutingModule } from './arcos-routing.module';

import { ArcosPage } from './arcos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcosPageRoutingModule
  ],
  declarations: [ArcosPage]
})
export class ArcosPageModule {}

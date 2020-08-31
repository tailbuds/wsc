import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [InputPage],
})
export class InputPageModule {}

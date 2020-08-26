import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';
import { ScorecardFormComponent } from './components/scorecard-form/scorecard-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InputPageRoutingModule],
  declarations: [InputPage],
})
export class InputPageModule {}

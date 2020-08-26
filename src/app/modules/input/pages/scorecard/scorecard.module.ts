import { ScorecardFormComponent } from './../../components/scorecard-form/scorecard-form.component';
import { ComponentsModule } from './../../../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorecardPageRoutingModule } from './scorecard-routing.module';

import { ScorecardPage } from './scorecard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorecardPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ScorecardPage, ScorecardFormComponent],
})
export class ScorecardPageModule {}

import { ScorecardFormComponent } from './../../components/scorecard-form/scorecard-form.component';
import { ComponentsModule } from './../../../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorecardPageRoutingModule } from './scorecard-routing.module';

import { ScorecardPage } from './scorecard.page';
import { FacilityFormComponent } from '../../components/facility-form/facility-form.component';
import { BasicCustomerDetailsComponent } from '../../components/basic-customer-details/basic-customer-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorecardPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [
    ScorecardPage,
    ScorecardFormComponent,
    FacilityFormComponent,
    BasicCustomerDetailsComponent,
  ],
})
export class ScorecardPageModule {}

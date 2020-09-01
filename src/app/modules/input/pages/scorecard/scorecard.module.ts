import { ComponentsModule } from './../../../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorecardPageRoutingModule } from './scorecard-routing.module';

import { ScorecardPage } from './scorecard.page';
import { FacilityFormComponent } from '../../components/facility-form/facility-form.component';
import { BasicCustomerDetailsComponent } from '../../components/basic-customer-details/basic-customer-details.component';
import { SupportDocumentsComponent } from '../../components/support-documents/support-documents.component';
import { CorporateGuaranteeComponent } from '../../components/corporate-guarantee/corporate-guarantee.component';
import { OrrComponent } from '../../components/orr/orr.component';
import { GettingStartedComponent } from '../../components/getting-started/getting-started.component';

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
    FacilityFormComponent,
    BasicCustomerDetailsComponent,
    SupportDocumentsComponent,
    CorporateGuaranteeComponent,
    OrrComponent,
    GettingStartedComponent,
  ],
})
export class ScorecardPageModule {}

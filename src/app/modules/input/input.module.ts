import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';
import { CreateScModalComponent } from './components/create-sc-modal/create-sc-modal.component';
import { ScorecardPageModule } from './pages/scorecard/scorecard.module';
import { BasicCustomerDetailsModule } from './components/basic-customer-details/basic-customer-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPageRoutingModule,
    ReactiveFormsModule,
    ScorecardPageModule,
    BasicCustomerDetailsModule,
  ],
  declarations: [InputPage, CreateScModalComponent],
})
export class InputPageModule {}

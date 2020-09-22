import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCustomerDetailsComponent } from './basic-customer-details.component';

@NgModule({
  declarations: [BasicCustomerDetailsComponent],
  imports: [CommonModule],
  exports: [BasicCustomerDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicCustomerDetailsModule {}

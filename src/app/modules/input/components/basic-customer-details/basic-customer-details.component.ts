import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Scorecard } from 'src/app/shared/models/scorecard.model';

@Component({
  selector: 'app-basic-customer-details',
  templateUrl: './basic-customer-details.component.html',
  styleUrls: ['./basic-customer-details.component.scss'],
})
export class BasicCustomerDetailsComponent implements OnInit {
  @Input() scorecard: Scorecard;
  @Output() scoreCardData: EventEmitter<object> = new EventEmitter();
  expiryDate: string;
  customerNew: boolean;
  scorecardId: string;
  customerName: string;
  constructor() {}

  ngOnInit() {
    if (this.scorecard) {
      this.expiryDate = this.scorecard.expiryDt.split('T')[0];
      this.customerNew = this.scorecard.customer.new;
      this.scorecardId = this.scorecard.customer.id;
      this.customerName = this.scorecard.customer.name;
    }
  }

  submitData(
    customerName: string,
    customerId: string,
    newCustomer: boolean,
    expiryDt: string
  ): void {
    if (customerName && customerId && newCustomer && expiryDt) {
      const scoreCardData = {
        customer: {
          name: customerName,
          new: newCustomer,
          id: customerId,
          networth: {
            value: '0',
          },
          proposedLimit: '0',
          bcsb: {
            totalExistingLimit: '0',
          },
        },
        maker: {
          user: '5f368cefb6c22c312c2376f1',
        },
        expiryDt: expiryDt,
      };
      this.scoreCardData.emit(scoreCardData);
    }
  }
}

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

  @Input() customerName: string;
  @Input() customerId: string;
  @Input() customerNew: boolean;
  @Input() expiryDt: string;
  expiryDate: string;

  constructor() {}

  ngOnInit() {
    if (this.expiryDt) {
      this.expiryDate = this.expiryDt.split('T')[0];
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

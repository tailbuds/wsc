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

  constructor() {}

  ngOnInit() {}

  submitData(
    customerName: string,
    customerId: string,
    newCustomer: boolean
  ): void {
    if (customerName && customerId && newCustomer) {
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
      };
      this.scoreCardData.emit(scoreCardData);
    }
  }
}

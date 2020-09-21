import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from 'src/app/shared/models/scorecard.model';

@Component({
  selector: 'app-orr',
  templateUrl: './orr.component.html',
  styleUrls: ['./orr.component.scss'],
})
export class OrrComponent implements OnInit {
  @Input() scorecard: any;
  @Input() scorecardDictionary: object;
  networthvalue: string;
  proposedLimit: string;
  totalLimit: string;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      if (this.scorecard) {
        this.networthvalue = this.scorecard.customer.networth.value;
        this.proposedLimit = this.scorecard.customer.proposedLimit;
        this.totalLimit = this.scorecard.customer.bcsb.totalExistingLimit;
      }
    }, 500);
  }
}

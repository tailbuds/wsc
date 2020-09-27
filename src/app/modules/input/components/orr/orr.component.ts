import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from 'src/app/shared/models/scorecard.model';
import { ScorecardService } from 'src/app/shared/services/scorecard.service';

@Component({
  selector: 'app-orr',
  templateUrl: './orr.component.html',
  styleUrls: ['./orr.component.scss'],
})
export class OrrComponent implements OnInit {
  @Input() scorecard: Scorecard;
  @Input() scorecardDictionary: object;
  networthvalue: string;
  proposedLimit: string;
  totalLimit: string;
  constructor(private scService: ScorecardService) {}

  log(value: any) {}

  getData() {
    this.networthvalue = this.scorecard.customer.networth.value;
    this.proposedLimit = this.scorecard.customer.proposedLimit;
    this.totalLimit = this.scorecard.customer.bcsb.totalExistingLimit;
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.scorecard) {
        this.getData();
      }
    }, 500);
  }

  sendNetWorth(nValue: any) {
    const data = {
      customer: {
        networth: {
          value: nValue,
        },
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'networth', 'value')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.networth.value = res.postUpdate;
      });
  }

  sendrepaymentSource(value: any) {
    const data = {
      customer: {
        repaymentSource: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'repaymentSource')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.repaymentSource = res.postUpdate;
      });
  }

  sendRelationYears(value: any) {
    const data = {
      customer: {
        relationYears: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'relationYears')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.relationYears = res.postUpdate;
      });
  }

  sendOneYearDpd(value: any) {
    const data = {
      customer: {
        dpdOneYear: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'dpdOneYear')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.dpdOneYear = res.postUpdate;
      });
  }

  sendBusinessYears(value: any) {
    const data = {
      customer: {
        businessYears: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'businessYears')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.businessYears = res.postUpdate;
      });
  }

  sendSupportDocuments(value: any) {
    const data = {
      customer: {
        networth: {
          document: value,
        },
      },
    };
    this.scService
      .patchScorecard(
        this.scorecard.id,
        data,
        'customer',
        'networth',
        'document'
      )
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.networth.document = res.postUpdate;
      });
  }

  sendProposedLimit(value: any) {
    const data = {
      customer: {
        proposedLimit: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'proposedLimit')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.proposedLimit = res.postUpdate;
      });
  }

  sendTotalLimit(value: any) {
    const data = {
      customer: {
        bcsb: {
          totalExistingLimit: value,
        },
      },
    };
    this.scService
      .patchScorecard(
        this.scorecard.id,
        data,
        'customer',
        'bcsb',
        'totalExistingLimit'
      )
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.bcsb.totalExistingLimit = res.postUpdate;
      });
  }

  sendBcsbStatus(value: any) {
    const data = {
      customer: {
        bcsb: {
          status: value,
        },
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'bcsb', 'status')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.bcsb.status = res.postUpdate;
      });
  }

  sendBcsbRelatedCompaniesStatus(value: any) {
    const data = {
      customer: {
        bcsb: {
          relatedCompaniesStatus: value,
        },
      },
    };
    this.scService
      .patchScorecard(
        this.scorecard.id,
        data,
        'customer',
        'bcsb',
        'relatedCompaniesStatus'
      )
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.bcsb.relatedCompaniesStatus = res.postUpdate;
      });
  }
}

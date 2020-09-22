import { Component, OnInit, Input } from '@angular/core';
import { ScorecardService } from 'src/app/shared/services/scorecard.service';
import { Scorecard } from '../../../../shared/models/scorecard.model';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent implements OnInit {
  @Input() scorecard: Scorecard;
  @Input() scorecardDictionary: object;

  constructor(private scService: ScorecardService) {}

  ngOnInit() {}

  sendGender(value: any) {
    const data = {
      customer: {
        gender: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'gender')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.gender = res.postUpdate;
      });
  }

  sendAgeRange(value: any) {
    const data = {
      customer: {
        ageRange: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'ageRange')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.ageRange = res.postUpdate;
      });
  }

  sendNationality(value: any) {
    const data = {
      customer: {
        nationalityType: value,
      },
    };
    this.scService
      .patchScorecard(this.scorecard.id, data, 'customer', 'nationalityType')
      .subscribe((res) => {
        console.log(res);
        this.scorecard.customer.nationalityType = res.postUpdate;
      });
  }
}

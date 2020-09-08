import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from '../../../../shared/models/scorecard.model';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent implements OnInit {
  @Input() scorecard: Scorecard;

  ageRange: string;
  gender: string;
  nationality: string;

  constructor() {}

  ngOnInit() {
    // this.ageRange = this.scorecard.customer.ageRange;
    // this.gender = this.scorecard.customer.gender;
    // this.nationality = this.scorecard.customer.nationality;
  }
}

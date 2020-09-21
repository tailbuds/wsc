import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from '../../../../shared/models/scorecard.model';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent implements OnInit {
  @Input() scorecard: Scorecard;
  @Input() scorecardDictionary: object;

  constructor() {}

  ngOnInit() {}
}

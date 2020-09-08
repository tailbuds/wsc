import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from 'src/app/shared/models/scorecard.model';

@Component({
  selector: 'app-corporate-guarantee',
  templateUrl: './corporate-guarantee.component.html',
  styleUrls: ['./corporate-guarantee.component.scss'],
})
export class CorporateGuaranteeComponent implements OnInit {
  @Input() scorecard: Scorecard;

  constructor() {}

  ngOnInit() {}
}

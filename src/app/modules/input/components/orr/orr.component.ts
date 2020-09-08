import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from 'src/app/shared/models/scorecard.model';

@Component({
  selector: 'app-orr',
  templateUrl: './orr.component.html',
  styleUrls: ['./orr.component.scss'],
})
export class OrrComponent implements OnInit {
  @Input() scorecard: Scorecard;

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from '../../models/scorecard.model';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss'],
})
export class ScoreCardComponent implements OnInit {
  @Input() scorecard: Scorecard;

  constructor() {}

  ngOnInit() {
    this.scorecard = new Scorecard(this.scorecard);
  }
}

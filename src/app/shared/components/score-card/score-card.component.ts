import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss'],
})
export class ScoreCardComponent implements OnInit {
  @Input() scorecard: {
    name: string;
    avgFrr: number;
    frrColor: string;
    orr: number;
    orrColor: string;
    status: string;
  };
  // name: string = 'DEMO NAME';
  // orrScore: number = 100;
  // frrScore: number = 80;
  // status: string = 'draft';

  constructor() {}

  ngOnInit() {}
}

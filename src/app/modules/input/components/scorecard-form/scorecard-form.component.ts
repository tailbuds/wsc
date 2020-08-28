import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/shared/models/facility.model';

@Component({
  selector: 'app-scorecard-form',
  templateUrl: './scorecard-form.component.html',
  styleUrls: ['./scorecard-form.component.scss'],
})
export class ScorecardFormComponent implements OnInit {
  facilities: Array<Facility>;
  constructor() {}

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  log(result: any) {
    console.log(result.value);
  }

  ngOnInit() {}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Facility } from 'src/app/shared/models/facility.model';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-scorecard-form',
  templateUrl: './scorecard-form.component.html',
  styleUrls: ['./scorecard-form.component.scss'],
})
export class ScorecardFormComponent implements OnInit {
  @ViewChild('scorecardSlides') slides: IonSlides;
  end: boolean;
  start = true;

  facilities: Array<Facility>;
  constructor() {}

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  log(result: any) {
    console.log(result.value);
  }

  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  checkSlide() {
    this.slides.isEnd().then((v) => {
      this.end = v;
    });

    this.slides.isBeginning().then((v) => {
      this.start = v;
    });
  }

  ngOnInit() {}
}

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Facility } from 'src/app/shared/models/facility.model';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScorecardService } from '../../../../shared/services/scorecard.service';
import { Scorecard } from '../../../../shared/models/scorecard.model';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {
  title: string;

  scorecard: Scorecard;

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private scService: ScorecardService
  ) {
    this.title = 'Scorecard';
  }

  @ViewChild('scorecardSlides') slides: IonSlides;
  end: boolean;
  start = true;

  facilities: Array<Facility>;

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

  ngOnInit() {
    this.initialFormFill();
  }

  async initialFormFill() {
    this.routeSub = await this.route.params.subscribe((params) => {
      this.scService.getScorecard(params.scId).subscribe((res: Scorecard) => {
        this.scorecard = res;
      });
    });
  }
}

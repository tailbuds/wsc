import { Component, OnInit } from '@angular/core';
import { ScorecardService } from '../../../../shared/services/scorecard.service';
import { HttpService } from '../../../../shared/services/http.service';
import { Scorecard } from '../../../../shared/models/scorecard.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  title: string;
  scorecards: Array<Scorecard>;

  constructor(private scService: ScorecardService) {
    this.title = 'Home';
  }

  ngOnInit() {
    this.scService.getScorecards().subscribe((res: Array<Scorecard>) => {
      this.scorecards = res;
    });
  }
}

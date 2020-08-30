import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  title: string;
  scorecards: Array<object>;

  constructor() {
    this.title = 'Home';
    this.scorecards = [
      {
        name: 'John Doe',
        avgFrr: 80,
        frrColor: 'success',
        orr: 100,
        orrColor: 'warning',
        status: 'draft',
      },
      {
        name: 'Tom Doe',
        avgFrr: 80,
        frrColor: 'success',
        orr: 100,
        orrColor: 'warning',
        status: 'draft',
      },
      {
        name: 'Tom Doe',
        avgFrr: 80,
        frrColor: 'success',
        orr: 100,
        orrColor: 'warning',
        status: 'draft',
      },
      {
        name: 'Tom Doe',
        avgFrr: 80,
        frrColor: 'success',
        orr: 100,
        orrColor: 'warning',
        status: 'draft',
      },
      {
        name: 'Tom Doe',
        avgFrr: 80,
        frrColor: 'success',
        orr: 100,
        orrColor: 'warning',
        status: 'draft',
      },
    ];
  }

  ngOnInit() {}
}

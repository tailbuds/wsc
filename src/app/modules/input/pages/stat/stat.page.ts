import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.page.html',
  styleUrls: ['./stat.page.scss'],
})
export class StatPage implements OnInit {
  title: string;

  constructor() {
    this.title = 'Stats';
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {
  title: string;

  constructor() {
    this.title = 'Page Not Found';
  }

  ngOnInit() {}
}

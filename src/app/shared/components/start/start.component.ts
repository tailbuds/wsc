import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    location.href =
      'https://192.168.0.18:9443/oauth2/authorize?response_type=code&redirect_uri=http://192.168.0.18:8100/oauth&client_id=SAKsb4CWTh6JQ7mRO7FfY1uGhtoa';
  }

  // navigateToMakerPage() {
  //   this.router.navigate(['input/home']);
  // }

  // navigateToApprovePage() {
  //   this.router.navigate(['approve/home']);
  // }
}

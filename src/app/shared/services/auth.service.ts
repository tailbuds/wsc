import { AuthConstants } from './../config/auth-constants';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) {}

  login() {
    return this.httpService.get(
      'https://localhost:9443/oauth2/authorize?response_type=code&redirect_uri=http://localhost:8100/oauth&client_id=SAKsb4CWTh6JQ7mRO7FfY1uGhtoa'
    );
  }

  logout() {
    this.storageService
      .removeItem(AuthConstants.AUTH)
      .then((res) => {
        this.router.navigate(['']);
      })
      .catch((e) => {
        this.storageService.clear();
        this.router.navigate(['']);
      });
  }
}

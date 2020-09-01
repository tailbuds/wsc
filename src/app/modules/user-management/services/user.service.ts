import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Array<User>;
  user: User;
  private http: HttpService;

  constructor() {}
  get(): void {
    this.http
      .get('http://localhost:6143/users')
      .subscribe((users: Array<User>) => {
        return users;
      });
  }
}

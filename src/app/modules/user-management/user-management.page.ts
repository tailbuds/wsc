import { HttpService } from './../../shared/services/http.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.page.html',
  styleUrls: ['./user-management.page.scss'],
})
export class UserManagementPage implements OnInit {
  title = 'User management';

  users: Array<User>;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.http
      .get('http://localhost:6143/users')
      .subscribe((users: Array<User>) => {
        this.users = users;
      });
  }
}

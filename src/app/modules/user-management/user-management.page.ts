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

  constructor() {
    this.users = [
      new User(
        '5f334e9ef739ffe5e4e9629e',
        'root',
        ['maker', 'approver', 'usrMgt'],
        '2020-08-12T02:06:22.502Z',
        '2020-08-12T02:06:22.502Z'
      ),
      new User(
        '5f368cc7b6c22c312c2376f0',
        'revanth.nemani',
        ['maker', 'usrMgt', 'approver', 'admin'],
        '2020-08-14T13:08:23.784Z',
        '2020-08-20T09:13:28.564Z'
      ),
      new User(
        '5f368cefb6c22c312c2376f1',
        'hanish.ak',
        ['approver'],
        '2020-08-14T13:09:03.075Z',
        '2020-08-14T13:09:03.075Z'
      ),
      new User(
        '5f368cc7b6c22c312c2376f0',
        'revanth.nemani',
        ['maker', 'usrMgt', 'approver', 'admin'],
        '2020-08-14T13:08:23.784Z',
        '2020-08-20T09:13:28.564Z'
      ),
      new User(
        '5f368cefb6c22c312c2376f1',
        'hanish.ak',
        ['approver'],
        '2020-08-14T13:09:03.075Z',
        '2020-08-14T13:09:03.075Z'
      ),
      new User(
        '5f368cc7b6c22c312c2376f0',
        'revanth.nemani',
        ['maker', 'usrMgt', 'approver', 'admin'],
        '2020-08-14T13:08:23.784Z',
        '2020-08-20T09:13:28.564Z'
      ),
      new User(
        '5f368cefb6c22c312c2376f1',
        'hanish.ak',
        ['approver'],
        '2020-08-14T13:09:03.075Z',
        '2020-08-14T13:09:03.075Z'
      ),
      new User(
        '5f368cc7b6c22c312c2376f0',
        'revanth.nemani',
        ['maker', 'usrMgt', 'approver', 'admin'],
        '2020-08-14T13:08:23.784Z',
        '2020-08-20T09:13:28.564Z'
      ),
      new User(
        '5f368cefb6c22c312c2376f1',
        'hanish.ak',
        ['approver'],
        '2020-08-14T13:09:03.075Z',
        '2020-08-14T13:09:03.075Z'
      ),
      new User(
        '5f368cc7b6c22c312c2376f0',
        'revanth.nemani',
        ['maker', 'usrMgt', 'approver', 'admin'],
        '2020-08-14T13:08:23.784Z',
        '2020-08-20T09:13:28.564Z'
      ),
      new User(
        '5f368cefb6c22c312c2376f1',
        'hanish.ak',
        ['approver'],
        '2020-08-14T13:09:03.075Z',
        '2020-08-14T13:09:03.075Z'
      ),
    ];
  }

  ngOnInit() {}
}

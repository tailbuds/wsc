import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.page.html',
  styleUrls: ['./user-management.page.scss'],
})
export class UserManagementPage implements OnInit {
  title = 'User management';

  users: Array<User>;

  constructor() {}

  ngOnInit() {}
}

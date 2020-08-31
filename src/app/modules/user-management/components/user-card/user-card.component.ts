import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user.model';

export enum roles {
  admin = 'admin',
  maker = 'maker',
  approver = 'approver',
  usrMgt = 'usrMgt',
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  roles = [roles.admin, roles.maker, roles.approver, roles.usrMgt];

  constructor() {}

  ngOnInit() {}
}

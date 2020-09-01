import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user.model';
import { HttpService } from '../../../../shared/services/http.service';
import { AlertController } from '@ionic/angular';

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

  constructor(
    private http: HttpService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  updateRoles(updatedRoles: Array<string>): void {
    this.http
      .patch('http://localhost:6143/users', {
        username: this.user.username,
        roles: updatedRoles,
      })
      .subscribe((res) => console.log(res));
  }

  async deleteUser(): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: '',
      header: `Delete user`,
      message: `Warning: are you sure to delete the user: <strong>${this.user.username}</strong>?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.http
              .delete('http://localhost:6143/users/' + this.user.username)
              .subscribe((res) => {
                console.log(res);
                location.reload();
              });
          },
        },
      ],
    });

    await alert.present();
  }
}

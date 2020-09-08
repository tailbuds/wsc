import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from '../../models/scorecard.model';
import { ScorecardService } from '../../services/scorecard.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss'],
})
export class ScoreCardComponent implements OnInit {
  @Input() scorecard: Scorecard;

  constructor(
    private scService: ScorecardService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.scorecard = new Scorecard(this.scorecard);
  }

  async deleteSc(): Promise<void> {
    const alert = await this.alertController.create({
      cssClass: '',
      header: `Delete Scorecard`,
      message: `Warning: are you sure to delete the scorecard of: <strong>${this.scorecard.customer.name}</strong>?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {},
        },
        {
          text: 'Okay',
          handler: () => {
            this.scService
              .deleteScorecard(this.scorecard.id)
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

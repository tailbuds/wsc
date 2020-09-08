import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateScModalComponent } from './components/create-sc-modal/create-sc-modal.component';
import { ScorecardService } from 'src/app/shared/services/scorecard.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  scorecardTab: string;
  
  constructor(
    private scService: ScorecardService,
    public modalCtrl: ModalController
  ) {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CreateScModalComponent,
      cssClass: 'my-custom-class',
    });

    modal.onWillDismiss().then((data) => {
      if (data.data.create === true) {
        this.scorecardTab = 'scorecard';
      }
    });

    return await modal.present();
  }

  ngOnInit() {}

  createScorecard() {
    // this.scService.postScorecard();
  }
}

import { Scorecard } from './../../../../shared/models/scorecard.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScorecardService } from '../../../../shared/services/scorecard.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
// import { BasicCustomerDetailsComponent } from '../basic-customer-details/basic-customer-details.component';

@Component({
  selector: 'app-create-sc-modal',
  templateUrl: './create-sc-modal.component.html',
  styleUrls: ['./create-sc-modal.component.scss'],
})
export class CreateScModalComponent implements OnInit {
  // @ViewChild(BasicCustomerDetailsComponent)
  @Output()
  newScId: EventEmitter<any> = new EventEmitter();
  data: object;

  customerName: string;
  constructor(
    public modalCtrl: ModalController,
    private scService: ScorecardService,
    private router: Router
  ) {}

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss({
      create: false,
    });
  }

  createSc() {
    console.log(this.data);
    return this.scService.postScorecard(this.data).subscribe(
      (res) => {
        this.router.navigate(['input/scorecard', res.created.id]);
        this.modalCtrl.dismiss({
          create: true,
        });
      },
      (error) => {
        throwError(error);
      }
    );
  }

  acceptData(data: object) {
    this.data = data;
  }
}

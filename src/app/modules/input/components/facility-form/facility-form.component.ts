import { Component, OnInit, Input } from '@angular/core';
import { Facility } from 'src/app/shared/models/facility.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-facility-form',
  templateUrl: './facility-form.component.html',
  styleUrls: ['./facility-form.component.scss'],
})
export class FacilityFormComponent implements OnInit {
  @Input() facility: Facility;
  @Input() facilityCount: number;

  constructor() {}

  ngOnInit() {}
}

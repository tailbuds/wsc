import { Component, OnInit, Input } from '@angular/core';
import { Scorecard } from 'src/app/shared/models/scorecard.model';

@Component({
  selector: 'app-support-documents',
  templateUrl: './support-documents.component.html',
  styleUrls: ['./support-documents.component.scss'],
})
export class SupportDocumentsComponent implements OnInit {
  @Input() scorecard: Scorecard;

  constructor() {}

  ngOnInit() {}
}

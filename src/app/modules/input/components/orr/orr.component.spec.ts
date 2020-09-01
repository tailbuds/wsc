import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrrComponent } from './orr.component';

describe('OrrComponent', () => {
  let component: OrrComponent;
  let fixture: ComponentFixture<OrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddguidePage } from './addguide.page';

describe('AddguidePage', () => {
  let component: AddguidePage;
  let fixture: ComponentFixture<AddguidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddguidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddguidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

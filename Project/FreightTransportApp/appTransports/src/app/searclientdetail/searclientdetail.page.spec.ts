import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearclientdetailPage } from './searclientdetail.page';

describe('SearclientdetailPage', () => {
  let component: SearclientdetailPage;
  let fixture: ComponentFixture<SearclientdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearclientdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearclientdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

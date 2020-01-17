import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatecustomerPage } from './updatecustomer.page';

describe('UpdatecustomerPage', () => {
  let component: UpdatecustomerPage;
  let fixture: ComponentFixture<UpdatecustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatecustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

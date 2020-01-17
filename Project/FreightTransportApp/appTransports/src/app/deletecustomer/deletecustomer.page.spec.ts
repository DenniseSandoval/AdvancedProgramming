import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletecustomerPage } from './deletecustomer.page';

describe('DeletecustomerPage', () => {
  let component: DeletecustomerPage;
  let fixture: ComponentFixture<DeletecustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletecustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

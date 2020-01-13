import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuCustomerPage } from './menu-customer.page';

describe('MenuCustomerPage', () => {
  let component: MenuCustomerPage;
  let fixture: ComponentFixture<MenuCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

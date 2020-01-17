import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuCarrierPage } from './menu-carrier.page';

describe('MenuCarrierPage', () => {
  let component: MenuCarrierPage;
  let fixture: ComponentFixture<MenuCarrierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCarrierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCarrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

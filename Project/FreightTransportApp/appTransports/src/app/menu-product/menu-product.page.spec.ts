import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuProductPage } from './menu-product.page';

describe('MenuProductPage', () => {
  let component: MenuProductPage;
  let fixture: ComponentFixture<MenuProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

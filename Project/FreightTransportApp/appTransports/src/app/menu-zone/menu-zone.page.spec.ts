import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuZonePage } from './menu-zone.page';

describe('MenuZonePage', () => {
  let component: MenuZonePage;
  let fixture: ComponentFixture<MenuZonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuZonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuZonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

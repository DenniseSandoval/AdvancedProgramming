import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuGuidePage } from './menu-guide.page';

describe('MenuGuidePage', () => {
  let component: MenuGuidePage;
  let fixture: ComponentFixture<MenuGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchguidePage } from './searchguide.page';

describe('SearchguidePage', () => {
  let component: SearchguidePage;
  let fixture: ComponentFixture<SearchguidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchguidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchguidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

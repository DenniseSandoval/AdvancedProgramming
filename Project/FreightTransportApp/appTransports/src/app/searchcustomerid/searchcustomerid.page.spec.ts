import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchcustomeridPage } from './searchcustomerid.page';

describe('SearchcustomeridPage', () => {
  let component: SearchcustomeridPage;
  let fixture: ComponentFixture<SearchcustomeridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcustomeridPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchcustomeridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

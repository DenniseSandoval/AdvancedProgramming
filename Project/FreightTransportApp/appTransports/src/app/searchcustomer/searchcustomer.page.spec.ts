import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchcustomerPage } from './searchcustomer.page';

describe('SearchcustomerPage', () => {
  let component: SearchcustomerPage;
  let fixture: ComponentFixture<SearchcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

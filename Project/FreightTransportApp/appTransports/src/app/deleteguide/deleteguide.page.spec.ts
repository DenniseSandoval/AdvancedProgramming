import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteguidePage } from './deleteguide.page';

describe('DeleteguidePage', () => {
  let component: DeleteguidePage;
  let fixture: ComponentFixture<DeleteguidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteguidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteguidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

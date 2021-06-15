import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresionPage } from './presion.page';

describe('PresionPage', () => {
  let component: PresionPage;
  let fixture: ComponentFixture<PresionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

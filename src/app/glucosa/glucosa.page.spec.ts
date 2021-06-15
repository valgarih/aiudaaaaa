import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlucosaPage } from './glucosa.page';

describe('GlucosaPage', () => {
  let component: GlucosaPage;
  let fixture: ComponentFixture<GlucosaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucosaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlucosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

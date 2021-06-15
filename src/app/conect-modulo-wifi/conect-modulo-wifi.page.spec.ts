import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ConectModuloWifiPage } from './conect-modulo-wifi.page';

describe('ConectModuloWifiPage', () => {
  let component: ConectModuloWifiPage;
  let fixture: ComponentFixture<ConectModuloWifiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectModuloWifiPage ],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ConectModuloWifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

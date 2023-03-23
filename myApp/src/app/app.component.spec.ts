import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myApp');
  });

  it("should use the list from the service", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.plans).toEqual([
      {
        id:1,
        planName: 'Starter',
        planPrice: '1',
        planDescription : 'Starter features for your business to grow',
        buttonClicked: false,
        buttonDisabled:false
      },
    
      {
        id:2,
        planName: 'Regular',
        planPrice: '25',
        planDescription : 'Regular features for your business to grow',
        buttonClicked: false,
        buttonDisabled:false
      },
    
      {
        id:3,
        planName: 'Professional',
        planPrice: '75',
        planDescription : 'Professional features for your business to grow',
        buttonClicked: false,
        buttonDisabled:false
      },
    
      {
        id:4,
        planName: 'Ultimate',
        planPrice: '25',
        planDescription : 'Regular features for your business to grow',
        buttonClicked: false,
        buttonDisabled:false
      },
    ])
  });
});

import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {


  let app: AppComponent;
  let fixture;
  let component;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent,
        DiagramComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    component = fixture.debugElement.componentInstance;

  }));

  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it('renders a diagram component', () => {
    expect(fixture.nativeElement.querySelector('app-diagram')).toBeTruthy();
  });

});

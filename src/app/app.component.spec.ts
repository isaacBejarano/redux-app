import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // global <Promise> init ..........
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let ref: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); // has instance + template
    app = fixture.componentInstance; // instance
    ref = fixture.nativeElement; // template
  });
  // ..............

  it('app shell exists', () => {
    expect(app).toBeTruthy();
  });

  it(`title1 is 'redux-app'`, () => {
    expect(app.title1).toEqual('Emitters');
  });

  it(`title2 is 'ngRx = Redux Pattern + RxJS'`, () => {
    expect(app.title2).toEqual('Redux');
  });

  it('renders textContent Emitters', () => {
    fixture.detectChanges();
    expect(ref.querySelector('.nav-item:nth-child(1)').textContent).toContain(
      'Emitters'
    );
  });

  it('renders textContent Redux', () => {
    fixture.detectChanges();
    expect(ref.querySelector('.nav-item:nth-child(2)').textContent).toContain(
      'Redux'
    );
  });
});

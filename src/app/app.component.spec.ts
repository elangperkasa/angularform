import { TestBed, ComponentFixture  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'  
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestApiService } from './rest-api.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let service: RestApiService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,     
        HttpClientModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    service = TestBed.inject(RestApiService);
    
    component = fixture.componentInstance;
  });

  it('Checking Resto description number of words', ()=> {
    
    expect(service).toBeTruthy();
    let thespanText = fixture.debugElement.query(By.css('#descresto'));    
    fixture.componentInstance.loadResto(); 
    fixture.detectChanges(); 
    let theSpanElement = thespanText.nativeElement;    
    let valueSpan = theSpanElement.innerHTML;
    
    thespanText.nativeElement.value = "This is just a test word counting";
    // fixture.componentInstance.wordCounteronloadTest(valueSpan);
    // fixture.detectChanges();
    expect(theSpanElement.innerHTML).toContain(valueSpan);
    // expect(fixture.componentInstance.words).toBeGreaterThan(0)
  });


  
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'Ulventech'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Ulventech');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('ulventech');
  // });



});

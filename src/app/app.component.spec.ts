import { TestBed, ComponentFixture, fakeAsync, tick  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'  
import { By } from '@angular/platform-browser';
import {  DebugElement } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

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
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
  });

  it('The Counting the number of words from Body text Url Description Contents Function is running', ()=> {      
    let thespanText = fixture.debugElement.query(By.css('#descresto'));    
    let theSpanElement = thespanText.nativeElement;   
    thespanText.nativeElement.innerText = "This is just a test word counting";
    let valueSpan = theSpanElement.innerHTML;
    
    fixture.componentInstance.wordCounteronloadTest(valueSpan);
    // expect(fixture.componentInstance.words-1).toContain(valueSpan);
    expect(fixture.componentInstance.words-1).toBeGreaterThan(0) 
  });

});

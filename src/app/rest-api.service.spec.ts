import { TestBed } from '@angular/core/testing';
import { RestApiService } from './rest-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'  

describe('RestApiService', () => {
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

    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiService);
  });

  it('Service is created', () => {
    expect(service).toBeTruthy();
  });
});

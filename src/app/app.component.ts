import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApiService } from './rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='Ulventech';
  myForm: FormGroup;
  Resto: any = [];
  wordCount: any;
  @ViewChild("text") text: ElementRef;
  words: any;
  myString : String;
  myArray: any = [];

  
  @Input() restoDetails = { description: '' };


  constructor(public fb: FormBuilder, public restApi: RestApiService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
          message: ['', [Validators.required, Validators.minLength(15)]]
    });         
    this.loadResto();
  }
  
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Message', form.value.message);
  }
  
  loadResto() {
    return this.restApi.getResto().subscribe((data: {}) => {
      this.Resto = data;
      this.wordCounteronload();    
      this.convertDesctoArray();
    });
  }

  wordCounter() {
    this.wordCount = this['text'] ? this['text'].nativeElement.value.split(/[\w\d\’\'-]+/gi) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }
 
  wordCounteronload() {    
    this.wordCount = this.Resto.description ? this.Resto.description.split(/[\w\d\’\'-]+/gi) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }

  wordCounteronloadTest(str) {    
    this.wordCount = str ? str.split(/[\w\d\’\'-]+/gi) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }

  convertDesctoArray() {       
    this.myString = this.Resto.description;
    this.myArray = this.myString.split(' ');
    console.log(this.myArray);
  }
}
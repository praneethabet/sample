import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {
  
  myControl: FormControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
   ];

   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  

   

   constructor() { }
   onClickMe() {
     console.log('ppp');
     
   }
   
  ngOnInit() {
  }

}

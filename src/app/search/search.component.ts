import { Library } from './../models/library.model';

import { Component, OnInit, ElementRef } from '@angular/core';
import {  Observable } from 'rxjs';

import { Result } from '../models/result.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  librarys: Library[];
  empty: boolean = true;
  searching: boolean;
  


  constructor() { }
  
  ngOnInit(): void {
    
  }


  Changes(event){
   
   this.librarys = event.librarys;

    this.empty = event.value === '';
    
    this.searching = event.searching;
   
   
  }

}

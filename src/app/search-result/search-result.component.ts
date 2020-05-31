
import { Component, OnInit, Input, OnChanges, ElementRef, AfterViewInit } from '@angular/core';
import { Library } from '../models/library.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() librarys: Library[] = [];
  @Input() emptyValue: boolean;

  @Input() searching: boolean = false;
  urlCDN: string = 'https://cdnjs.com/libraries/'
  constructor() { }

  ngOnInit(): void {

    


  }

  ngOnChanges(){
   

  }

 




}

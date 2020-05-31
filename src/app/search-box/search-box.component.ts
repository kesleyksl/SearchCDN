import { AppComponent } from './../app.component';
import { Library } from './../models/library.model';
import { map } from 'rxjs/operators';
import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { LibraryService } from '../services/library.service';
import { Result } from '../models/result.model';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @ViewChild('searchInput') searchInput: ElementRef 
  

  @Output() inputValueChange = new EventEmitter();
  librarys: Library[] = [];
  @Output() searching = new EventEmitter<boolean>(false) ;

  
  constructor(private libraryService: LibraryService) {
    
  }


  ngOnInit(): void {
    
  }
  ngAfterViewInit(){

  this.librarys = [];

  this.search();
 
}

  search() {

    

    let keyUp$ = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(

        debounceTime(800),


        switchMap((e) => this.libraryService.getLibrary(this.searchInput.nativeElement.value))



      )

      keyUp$.pipe(
        
        map(r=>r.results.slice(0,10))
      ).subscribe(
        result=>{
          
          this.librarys = result;
          
          this.inputValueChange.emit({librarys: this.librarys, value:this.searchInput.nativeElement.value, searching: false });
        },
        erro=>{
          this.inputValueChange.emit({librarys: this.librarys=[], value:this.searchInput.nativeElement.value='',searching: false });
        },

      )
    



  }

  emitEvent(){
  
    this.inputValueChange.emit({librarys: this.librarys=[], value:this.searchInput.nativeElement.value, searching: true });

  }


}

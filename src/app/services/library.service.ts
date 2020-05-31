import { Library } from './../models/library.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
   baseUrl = "//api.cdnjs.com/libraries";
  readonly queryUrl = "?search=";
  constructor(private http: HttpClient) { }

  getLibrary(libraryName: string): Observable<Result>{
    return this.http.get(`${this.baseUrl}${this.queryUrl}${libraryName}`);
  }

}

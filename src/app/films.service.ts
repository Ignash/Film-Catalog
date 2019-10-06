import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: any;
  url: string = 'http://localhost:3000/films'

  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get(this.url);
  }
}

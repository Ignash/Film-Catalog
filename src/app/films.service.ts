import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film'

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[];
  url: string = 'http://localhost:3000/films/page'

  constructor(private http: HttpClient) { }

  getFilms(number_page){
    return this.http.get(`${this.url}/${number_page}`);
  }
}

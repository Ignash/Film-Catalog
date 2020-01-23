import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Film } from '../model/film'
import { FilmsService } from '../films.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit, OnChanges {
  sortListValues = ['Выберите сортировку', 'A - Z', 'Z - A', 'Year'];
  sort: string;
  films: Array<Film>;
  filmsDb: Array<Film>;
  initial_numberFilms: number;
  allFilms: boolean;
  numberFilmsCollection: number;
  loading: boolean = false;
  search: string;

  constructor(private filmService: FilmsService) {}

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  ngOnInit() {
    this.initial_numberFilms = 10;
    this.loading = true;
    this.filmService.getNumberFilmsColection().subscribe((data: number) => {
      this.numberFilmsCollection = +data;
      this.loading = false;
    })

    this.filmService.getFilms(this.initial_numberFilms)
    .subscribe((data: Array<Film>) => {
      this.filmsDb =  data;
      this.films = [... this.filmsDb];
    });
  }

  

  setSortFilms(sort: string){
    console.log('start sort', sort);
    this.sort = sort;
    switch (sort) {
      case 'A - Z':
        this.films = this.filmsDb.sort((a: Film,b: Film) => {
          let result: number;
          if (a.title > b.title) result = 1;
          if (a.title < b.title) result = -1;
          if (a.title === b.title) result = 0;
          return result;
        });
        break;

      case 'Z - A':
        this.films = this.filmsDb.sort((a: Film, b: Film) => {
          let result: number;
          if (a.title > b.title) result = -1;
          if (a.title < b.title) result = 1;
          if (a.title === b.title) result = 0;
          return result;
        });
        break;

      case 'Year':
        this.films = this.filmsDb.sort((a: Film,b: Film) => {
          let result: number;
          if (a.release_date.slice(0, 4) > b.release_date.slice(0, 4)) result = -1;
          if (a.release_date.slice(0, 4) < b.release_date.slice(0, 4)) result = 1;
          if (a.release_date.slice(0, 4) === b.release_date.slice(0, 4)) result = 0;
          return result;
        });
        break;
    }
  };

  setSearchFilms(){
    this.films = this.filmsDb.filter((film: Film) => {
      let reg = new RegExp(this.search, 'ig')
      return reg.test(film.title) || reg.test(film.original_title);
    })
  }

  addFilms(): void{
    this.loading = true;
    this.filmService.getFilms(this.initial_numberFilms)
    .subscribe((data: Array<Film>) => {
      this.filmsDb = [...this.filmsDb, ...data];
      this.films = [...this.filmsDb];
      this.loading = false;
      if(this.films.length === this.numberFilmsCollection) this.allFilms = true;
      if(this.sort)  this.setSortFilms(this.sort);
      if(this.search)  this.setSearchFilms();
    });
  }
}

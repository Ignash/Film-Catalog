import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film'
import { FilmsService } from '../films.service';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  sortListValues = ['A - Z', 'Z - A'];
  sort: string;
  films: Array<Film>;
  initial_numberFilms: number;
  allFilms: boolean;
  numberFilmsCollection: number;
  loading: boolean = false;

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.initial_numberFilms = 10;
    this.allFilms = false;
    this.filmService.getNumberFilmsColection().subscribe((data: number) => {
      this.numberFilmsCollection = +data;
    })

    this.filmService.getFilms(this.initial_numberFilms)
    .subscribe((data: Array<Film>) => {
      this.films = data
      console.log(this.films)
    });
    console.log(this.sort);
  }

  setSortFilms(sort: number){
    console.log(sort);
    if (sort === 0) {
      this.films = this.films.sort((a: Film,b: Film) => {
        let result: number;
        if (a.title > b.title) result = 1;
        if (a.title < b.title) result = -1;
        if (a.title === b.title) result = 0;
        return result;
      });
      // console.log(this.films.map(item => item.name))
    };
    if (sort === 1) {
      this.films = this.films.sort((a: Film, b: Film) => {
        let result;
        if (a.title > b.title) result = -1;
        if (a.title < b.title) result = 1;
        if (a.title === b.title) result = 0;
        return result;
      });
      // console.log(this.films.map(item => item.name))
    };
  };

  addFilms(): void{
    this.loading = true;
    this.filmService.getFilms(this.initial_numberFilms)
    .subscribe((data: Array<Film>) => {
      this.films = [...this.films, ...data];
      this.loading = false;
      if(this.films.length === this.numberFilmsCollection) this.allFilms = true;
      console.log(this.films)
    });
  }
}

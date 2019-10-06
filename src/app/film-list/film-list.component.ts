import { Component, OnInit } from '@angular/core';
import { Film } from '../film'
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  sortListValues = ['A - Z', 'Z - A'];
  sort: string;
  films: any;

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((data)=> this.films = data);
    console.log(this.sort);
  }

  setSortFilms(sort: number){
    console.log(sort);
    if (sort === 0) {
      this.films = this.films.sort((a: Film,b: Film) => {
        let result: number;
        if (a.name > b.name) result = 1;
        if (a.name < b.name) result = -1;
        if (a.name === b.name) result = 0;
        return result;
      });
      // console.log(this.films.map(item => item.name))
    };
    if (sort === 1) {
      this.films = this.films.sort((a: Film,b: Film) => {
        let result;
        if (a.name > b.name) result = -1;
        if (a.name < b.name) result = 1;
        if (a.name === b.name) result = 0;
        return result;
      });
      // console.log(this.films.map(item => item.name))
    };
  };
}

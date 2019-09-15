import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service'
import { Film } from '../../film'
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films: Film[];

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.films = this.filmService.getFilms()
  }

}

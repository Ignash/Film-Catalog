import { Component, OnInit } from '@angular/core';
import { Film } from '../film'
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films: any;

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((data)=> this.films = data)
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../model/film';
import { FilmsService } from '../../films.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() filmItem: Film;

  urlImg: string;

  constructor( private filmsService: FilmsService) { }

  ngOnInit() {
    this.urlImg = this.filmsService.smallBackPath + this.filmItem.poster_path
  }

  // chooseFavorite(id: number){
  //   this.filmItem.chosen = !this.filmItem.chosen;
  // };

}

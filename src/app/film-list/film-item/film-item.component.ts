import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../film';
import { FilmsService } from '../../films.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() filmItem: Film;

  constructor( private filmsService: FilmsService) { }

  ngOnInit() {
  }

  chooseFavorite(id: number){
    this.filmItem.chosen = !this.filmItem.chosen;
  };

}

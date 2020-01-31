import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../../../model/film';
import { FilmsService } from '../../../services/films.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() filmItem: Film;

  urlImg: string;
  genres: Array<string> = [];

  constructor( private filmsService: FilmsService) { }

  ngOnInit() {
    this.urlImg = this.filmsService.smallBackPath + this.filmItem.poster_path;
      this.filmsService.getGenre(+this.filmItem.genre_ids[0])
      .pipe(
        map((genre: any) => {
          return genre[0].name
        })
      )
      .subscribe((genre: any) => {
        this.genres.push(genre)
      })
  }

  // chooseFavorite(id: number){
  //   this.filmItem.chosen = !this.filmItem.chosen;
  // };

}

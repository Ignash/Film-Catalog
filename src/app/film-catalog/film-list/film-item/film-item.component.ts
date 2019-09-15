import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() filmItem: Film;

  constructor() { }

  ngOnInit() {
  }

}

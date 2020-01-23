import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FilmsService } from '../films.service';
import { Film } from '../model/film';
import { map, tap } from 'rxjs/operators';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { PersonsFilm } from '../model/personsFilm';

@Component({
  selector: 'app-film-by-id',
  templateUrl: './film-by-id.component.html',
  styleUrls: ['./film-by-id.component.css']
})
export class FilmByIdComponent implements OnInit {
  filmData: Film;
  urlSmallImg: string;
  urlBigImg: string;
  urlVideo: SafeResourceUrl;
  titleVideo: string;
  genres: Array<string> = [];
  persons: PersonsFilm;
  ditector: Array<any>
  actors: Array<any>

  constructor(private route: ActivatedRoute, 
              private filmsService: FilmsService,
              private sanitizer: DomSanitizer) {

              }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.filmsService.getFilmById(+params.id)
      .pipe(
        map((data)=>data[0])
      )
      .subscribe((film: Film)=>{
        this.urlSmallImg = this.filmsService.smallBackPath + film.poster_path;
        this.urlBigImg = this.filmsService.bigBackPath + film.poster_path;
        this.filmData = film;

        let genresArrayObserv = film.genre_ids.map((genre: string)=> this.filmsService.getGenre(+genre));

        forkJoin(genresArrayObserv) 
        .pipe(
            map((genres: any) =>  genres.map((genre)=>genre[0].name)
            )
          )
          .subscribe((genres: any) => {
            this.genres = genres
          })
        

        this.filmsService.searchYouTubeVideo(film.original_title)
        .pipe(
          map((result: any)=> {
            return {
              title: result.items[0].snippet.title,
              urlVideo: result.items[0].id.videoId
            }
          })
        ).subscribe((video)=>{
          this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.urlVideo}`);
        })

        this.filmsService.getPersons(film.id)
        .subscribe((personsData: any) => {
          let { cast }: any = personsData[0];
          let { crew }: any = personsData[0];
          this.actors = cast.map((actors)=>{
            return {
              id: actors.id,
              name: actors.name
            }
          });
          this.ditector = crew.map((director)=>{
            return {
              id: director.id,
              name: director.name
            }
          })
        })
      })
    })
    
  }

}

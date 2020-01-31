import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../model/film'

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[];
  request_number: number = 0;
  url: string = 'http://localhost:3000/films';

  urlYouTube: string = 'https://www.googleapis.com/youtube/v3/search';
  keyYouTube: string = 'AIzaSyAyUiLB7w2DTK0ZVzxOblctbAXRiCnFKFQ';

  imgPath: string = 'https://image.tmdb.org/t/p'
  midImgPath: string = `${this.imgPath}/w500`
  smallImgPath: string = `${this.imgPath}/w185`
  bigBackPath: string = `${this.imgPath}/w1280`
  midBackPath: string = `${this.imgPath}/w780`
  smallBackPath: string = `${this.imgPath}/w300`

  constructor(private http: HttpClient) { }

  getFilms(numberFilms: number){
    let startindex: number = this.request_number ? this.request_number*numberFilms : 0;
    this.request_number++;

    return this.http.get(`${this.url}?startindex=${startindex}&numberFilms=${numberFilms}`);
  }

  getNumberFilmsColection(){
    return this.http.get(`${this.url}?count`)
  }

  getGenre(id: number){
    return this.http.get(`${this.url}/genre/${id}`)
  }

  getFilmById(id: number){
    return this.http.get(`${this.url}/${id}`)
  }

  searchYouTubeVideo(text: string) {
    return this.http.get(`${this.urlYouTube}?q=${text + ' Trailer'}&key=${this.keyYouTube}&maxResults=1&part=snippet&type=video`)
    
  }

  getPersons(idFilm: number){
    return this.http.get(`${this.url}/${idFilm}/persons`)
  }


}

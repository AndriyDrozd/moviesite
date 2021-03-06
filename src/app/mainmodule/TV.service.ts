import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()
export class TVService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '73b2fc9fab947354d61cb3faa1a40405';
    this.language = 'en-US';
    this.region = 'US'
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`)
  }

  getTVShowByGenre(id: string, pageNumber: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`);
  }

  getMovieReviews(id: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpc: HttpClient ) { }

  public getMoviesAll(): any {
    return this.httpc.get<Movies[]>('https://api.themoviedb.org/3/discover/movie?api_key=a144f8241e98910010f6f6ab16c41913&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  }
}
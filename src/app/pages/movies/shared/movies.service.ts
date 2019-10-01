import { Injectable, Injector } from '@angular/core';
import { Movie } from './movie.model';

import { BaseResourceService } from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseResourceService<Movie> {

  constructor(protected injector: Injector) {
    super('https://api.themoviedb.org/3/discover/movie?api_key=a144f8241e98910010f6f6ab16c41913&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', injector);
  }

}

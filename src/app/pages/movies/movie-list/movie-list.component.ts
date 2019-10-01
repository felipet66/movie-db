import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';

import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends BaseResourceListComponent<Movie> implements OnInit {
  private dataMovies = this.resources;
  constructor(private movieService: MovieService) {
    super(movieService)
  }
}


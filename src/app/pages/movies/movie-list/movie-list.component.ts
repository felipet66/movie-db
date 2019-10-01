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
  constructor(private movieService: MovieService) {
    super(movieService);
  }

  getUrlImg(data: any): string {
    return 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + data;
  }

  limitCaracteres(title: string) {
    if (title.length > 305) {
      title = title.substring(0, 300);
    }
    return title + '...';
  }

  filterBy(filter: string) {
    this.movieService.filterBy(filter);
  }
}


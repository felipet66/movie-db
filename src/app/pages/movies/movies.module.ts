import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [ MovieListComponent ],
  imports: [
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }

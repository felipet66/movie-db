import { NgModule } from '@angular/core';
import { GenreRoutingModule } from './genre-routing.module';
import { GenreListComponent } from './genre-list/genre-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ GenreListComponent ],
  imports: [
    SharedModule,
    GenreRoutingModule
  ]
})
export class GenreModule { }

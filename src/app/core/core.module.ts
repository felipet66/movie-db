import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from '../core/navbar/navbar.component';
import { HomeComponent } from '../pages/home/home.component';
import { CardComponent } from '../shared/components/card/card.component';
import { MoviesComponent } from '../pages/movies/movies.component';
import { GenreComponent } from '../pages/genre/genre.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CardComponent,
    MoviesComponent,
    GenreComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    MoviesComponent,
    GenreComponent,
    HttpClientModule
  ]
})
export class CoreModule { }

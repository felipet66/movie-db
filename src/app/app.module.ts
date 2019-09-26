import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { CardComponent } from "./pages/shared/components/card/card.component";
import { MoviesComponent } from './pages/movies/movies.component';
import { GenreComponent } from './pages/genre/genre.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CardComponent, MoviesComponent, GenreComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieElementComponent } from './movie-element/movie-element.component';
import { MovieInputComponent } from './movie-input/movie-input.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { FeaturesComponent } from './features/features.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'movies', component: MoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieElementComponent,
    MovieInputComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    FeaturesComponent,
    MoviesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, ButtonsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { Movie } from './movie/movie.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private moviesService: MoviesService
  ) {}

  // title = 'testowa apka';

  // movie = {
  //   title: 'Szklana pułapka 1',
  //   description: 'Lorem ipsum',
  //   year: '2000r',
  // };

  // movies: Movie[] = [];

  ngOnInit(): void {
    // this.movies = this.moviesService.movies;
  }

  // movieAdd(movieData: Movie): void {
  //   // console.log(movieData);
  //   this.loggingService.logStatusChange('test');
  //   this.movies.push(movieData);
  // }
}

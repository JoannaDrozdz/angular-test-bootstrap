import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Movie } from '../movie/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private loggingService: LoggingService,
    private moviesService: MoviesService
  ) {}

  title = 'testowa apka';

  movie = {
    title: 'Szklana pułapka 1',
    description: 'Lorem ipsum',
    year: '2000r',
  };

  movies: Movie[] = [];

  ngOnInit(): void {
    this.movies = this.moviesService.movies;
  }

}

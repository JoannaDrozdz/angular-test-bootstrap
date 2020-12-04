import { Movie } from './movie/movie.model';
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({providedIn: 'root'})
export class MoviesService {
  movies = [
    {
      id: 1,
      title: 'Szklana pułapka 1',
      description: 'Lorem ipsum',
      year: '2000r',
    },
    {
      id: 2,
      title: 'Szklana pułapka 2',
      description: 'Lorem ipsum',
      year: '2002r',
    },
    {
      id: 3,
      title: 'Szklana pułapka 3',
      description: 'Lorem ipsum',
      year: '2003r',
    },
  ];

  constructor(
    private loggingService: LoggingService,
  ) {}

  movieAdd(movieData: Movie): void {
    this.movies.push(movieData);
    this.loggingService.logStatusChange('movie add');
  }

  getMovie(id: number): Movie {
    // return this.movies[id - 1];
    return this.movies.filter( movie => movie.id === id)[0];
  }
}


import { Movie } from './movie/movie.model';

export class MoviesService {
  movies = [
    {
      title: 'Szklana pułapka 1',
      description: 'Lorem ipsum',
      year: '2000r',
    },
    {
      title: 'Szklana pułapka 2',
      description: 'Lorem ipsum',
      year: '2002r',
    },
    {
      title: 'Szklana pułapka 3',
      description: 'Lorem ipsum',
      year: '2003r',
    },
  ];
  movieAdd(movieData: Movie): void {
    this.movies.push(movieData);
  }
}

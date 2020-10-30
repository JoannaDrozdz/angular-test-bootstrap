import { Component } from '@angular/core';
import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testowa apka';

  movie = {
    title: 'Szklana pułapka 1',
    description: 'Lorem ipsum',
    year: '2000r',
  };

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
    console.log(movieData);
    this.movies.push(movieData);
  }
}

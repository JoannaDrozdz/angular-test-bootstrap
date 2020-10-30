import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.scss'],
})
export class MovieInputComponent implements OnInit {
  // newMovie: Movie;
  @Output() movieCreated = new EventEmitter<Movie>();

  constructor() {}

  ngOnInit(): void {}

  addMovie(movieTitle, movieDescription): void {
/*    this.newMovie = {
      title: movieTitle.value,
      description: movieDescription.value,
      year: '2006',
    };
        this.movieCreated.emit({
      title: this.newMovie.title,
      description: this.newMovie.description,
      year: this.newMovie.year,
    });*/

    this.movieCreated.emit(
      new Movie(movieTitle.value, movieDescription.value, '2006')
    );
  }
}

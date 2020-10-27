import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.scss'],
})
export class MovieInputComponent implements OnInit {
  newMovie: { title: string; description: string; year: string };
  @Output() movieCreated = new EventEmitter<{
    title: string;
    description: string;
    year: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  addMovie(movieTitle, movieDescription): void {
    this.newMovie = {
      title: movieTitle.value,
      description: movieDescription.value,
      year: '2006',
    };
    this.movieCreated.emit({
      title: this.newMovie.title,
      description: this.newMovie.description,
      year: this.newMovie.year,
    });
  }
}

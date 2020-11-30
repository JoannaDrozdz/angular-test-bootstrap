import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id: number;
    id = +this.route.snapshot.params.id;
    this.movie = this.moviesService.movies.filter((movie) => movie.id === id)[0]
      ? this.moviesService.movies.filter((movie) => movie.id === id)[0]
      : null;
    console.log(this.moviesService.movies.filter((movie) => movie.id === id));
    console.log(id);
  }
}

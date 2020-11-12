import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Movie } from '../movie/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.scss'],
})
export class MovieInputComponent implements OnInit {
  // newMovie: Movie;
  @Output() movieCreated = new EventEmitter<Movie>();
  @ViewChild('movieTitle') movieTitleData: ElementRef;
  @ViewChild('movieDescription') movieDescriptionData: ElementRef;

  isRedText = false;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  toggleRedText(): void {
    this.isRedText = !this.isRedText;
  }

  addMovie(
    movieTitle: HTMLInputElement,
    movieDescription: HTMLInputElement
  ): void {
    this.moviesService.movieAdd(
      new Movie(movieTitle.value, movieDescription.value, '2006')
    );
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

    // this.movieCreated.emit(
    //   new Movie(movieTitle.value, movieDescription.value, '2006')
    // );
  }

  // addMovie2(): void {
  //   console.log('movieTitleData: ', this.movieTitleData.nativeElement.value);
  //   console.log(
  //     'movieDescriptionData: ',
  //     this.movieDescriptionData.nativeElement.value
  //   );
  //
  //   this.movieCreated.emit(
  //     new Movie(
  //       this.movieTitleData.nativeElement.value,
  //       this.movieDescriptionData.nativeElement.value,
  //       '2006'
  //     )
  //   );
  // }
}

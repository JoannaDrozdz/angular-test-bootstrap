import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.scss']
})
export class MovieInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addMovie(movieInput): void {
    console.log(movieInput.value);
  }

}
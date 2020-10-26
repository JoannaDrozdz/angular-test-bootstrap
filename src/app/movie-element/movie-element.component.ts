import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.scss']
})
export class MovieElementComponent implements OnInit {

  @Input('movieElement') movie: {title: string, description: string, year: string};

  constructor() { }

  ngOnInit(): void {
  }

}

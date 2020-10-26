import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieElementComponent } from './movie-element/movie-element.component';
import { MovieInputComponent } from './movie-input/movie-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieElementComponent,
    MovieInputComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

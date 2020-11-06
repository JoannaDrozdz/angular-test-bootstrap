import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieElementComponent } from './movie-element/movie-element.component';
import { MovieInputComponent } from './movie-input/movie-input.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieElementComponent,
    MovieInputComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
  ],
  imports: [BrowserModule, ButtonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

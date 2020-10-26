import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

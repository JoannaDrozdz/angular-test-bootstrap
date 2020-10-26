import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navTitle = 'Angular test bootstrap';
  showSearch = true;

  constructor() {}

  ngOnInit(): void {}

  goToHome(): void {
    this.navTitle = 'Angular test bootstrap';
  }
  goToFeatures(): void {
    this.navTitle = 'Features page';
  }
  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }
  getData(event: any): void {
    console.log(event);
  }
}

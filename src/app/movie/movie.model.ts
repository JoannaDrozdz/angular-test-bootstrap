export class Movie {
  public id: number;
  public title: string;
  public description: string;
  public year: string;

  constructor(id: number, title: string, description: string, year: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.year = year;
  }
}

export default class Media {
  source: string;
  name: string;
  poster: string;

  constructor(source: string, name: string, poster: string) {
    this.source = source;
    this.name = name;
    this.poster = poster;
  }
}
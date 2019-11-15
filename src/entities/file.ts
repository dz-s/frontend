export default class File {
  full: string;
  thumbnail: string;
  kind: string;
  name: string;

  constructor(full: string, thumbnail: string, kind: string, name: string) {
    this.full = full;
    this.thumbnail = thumbnail;
    this.kind = kind;
    this.name = name;
  }
}
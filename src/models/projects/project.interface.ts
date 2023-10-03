import { Document } from 'mongoose';

export interface IProduct extends Document {
  readonly createdon_datetime: number;

  readonly project_name: String;

  readonly trailer_link: String;

  readonly hoichoi_link: String;

  readonly zee5_link: String;

  readonly directors_name: String;

  readonly producers_name: String;

  readonly writter_name: String;

  readonly music_director_name: String;

  readonly release_date: Number;

  readonly actors: Array<String>;

  readonly description: String;

  readonly associate_partners: Array<String>;

  readonly press_release: Array<String>;

  readonly project_poster_hr: String;

  readonly project_poster_vertical: String;

  readonly status: String;
}

import { Document } from 'mongoose';
export interface IUser extends Document {
  readonly name: string;
//   readonly value: string;
//   readonly translation_label: string;
//   readonly polygon_points: Array<object>;
  readonly createdon_datetime: number;
}

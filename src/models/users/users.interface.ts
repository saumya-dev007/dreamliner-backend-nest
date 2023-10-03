import { Document } from 'mongoose';
export interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly login_data: Array<object>;
  readonly createdon_datetime: number;
  readonly login_count:number;
  readonly refresh_token: string;
  readonly status: boolean;
}

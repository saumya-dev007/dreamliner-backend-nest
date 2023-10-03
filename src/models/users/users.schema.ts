import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment';
@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ index: -1 })
  email: string;
  @Prop({ index: -1 })
  password: string;
  @Prop({ type: 'array' })
  login_data: Array<object>;
  @Prop({ default: () => moment().valueOf() })
  createdon_datetime: number;
  @Prop({ default: 0 })
  login_count: number;
  @Prop({ default: true })
  status: boolean;
  @Prop()
  refresh_token: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

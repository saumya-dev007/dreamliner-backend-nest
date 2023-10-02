import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment';
@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true })
  name: string;
//   @Prop({ index: -1 })
//   value: string;
//   @Prop({ index: -1 })
//   translation_label: string;
//   @Prop({ type: 'array' })
//   polygon_points: Array<object>;
  @Prop({ default: () => moment().valueOf() })
  createdon_datetime: number;
}
export const UserSchema = SchemaFactory.createForClass(User);

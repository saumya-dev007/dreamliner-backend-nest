import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import * as moment from 'moment';
import { ObjectId } from 'mongoose';
@Schema({ collection: 'project_lists' })
export class Project_List {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  project_name: String;

  @Prop()
  trailer_link: String;

  @Prop()
  hoichoi_link: String;

  @Prop()
  zee5_link: String;

  @Prop({ required: true })
  directors_name: String;

  @Prop({ required: true })
  producers_name: String;

  @Prop({ required: true })
  writter_name: String;

  @Prop({ required: true })
  music_director_name: String;

  @Prop({ required: true })
  release_date: Number;

  @Prop({ required: true })
  actors: Array<Object>;

  @Prop()
  description: String;

  @Prop({ required: true })
  associate_partners: Array<String>;

  @Prop()
  press_release: Array<String>;

  @Prop({ required: true })
  poster_horizontal: String;

  @Prop({ required: true })
  poster_verticle: String;

  @Prop({ required: true })
  category: String;

  @Prop({ required: true })
  sub_category: Array<String>;

  @Prop({ default: true })
  status: Boolean;


  @Prop({ default: false })
  featured: Boolean;
}

export const Project_list = SchemaFactory.createForClass(Project_List);

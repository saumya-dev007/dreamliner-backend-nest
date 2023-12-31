import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection:'team_lists'})
export class Team{
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    designation:string;
    @Prop()
    image:string;
    @Prop({ default: true })
  status: Boolean;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
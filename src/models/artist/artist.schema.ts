import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection:'artist_lists'})
export class Artist{
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    gender:string;
    @Prop()
    image:string;
    @Prop({ default: true })
  status: Boolean;
}
export const ArtistSchema = SchemaFactory.createForClass(Artist);
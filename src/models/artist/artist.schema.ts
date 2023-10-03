import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection:'atrist_lists'})
export class Artist{
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    gender:string;
    @Prop()
    image:string;
}
export const ArtistSchema = SchemaFactory.createForClass(Artist);
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { IAurtist } from 'src/models/artist/artist.interface';

@Injectable()
export class ArtistService {
    constructor(@InjectModel('artist_lists') private artistModel:Model<IAurtist>){}


    async addArtist(data:any): Promise<any>{
        try {
            const artist = await this.artistModel.create(data);
            return Promise.resolve(artist);
        } catch (error) {
            return Promise.reject(error);
            
        }
    }

    async updateArtist(_id:string, field:any): Promise<any>{
        try {
            const artist = await this.artistModel.findByIdAndUpdate({_id:new mongoose.Types.ObjectId(_id)},{$set:{...field}});
            return Promise.resolve(artist);
        } catch (error) {
            return Promise.reject(error);
            
        }
    }
}
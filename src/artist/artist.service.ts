import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { IAurtist } from 'src/models/artist/artist.interface';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel('artist_lists') private artistModel: Model<IAurtist>,
  ) {}

  // =========== artist Listing ======== //
  async artistListing(data: any): Promise<any> {
    try {
      let artistData: any = await this.artistModel
        .find(data.searchcondition)
        .skip(data.skip)
        .limit(data.limit)
        .sort(data.sort);
      return Promise.resolve(artistData);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ========================================== //

  // ======== artist Listing Count ========== //
  async artistListingCount(data: any): Promise<any> {
    try {
      let countResponse: any = await this.artistModel.find(data.searchcondition).count();

      return Promise.resolve(countResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ======================================= //

  async addArtist(data: any): Promise<any> {
    try {
      const artist = await this.artistModel.create(data);
      return Promise.resolve(artist);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findArtist(_id: string): Promise<any> {
    try {
      const artist = await this.artistModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return Promise.resolve(artist);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateArtist(_id: string, field: any): Promise<any> {
    try {
      const artist = await this.artistModel.findByIdAndUpdate(
        { _id: new mongoose.Types.ObjectId(_id) },
        { $set: { ...field } },
      );
      return Promise.resolve(artist);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async autocompleteArtist(name: string): Promise<any> {
    try {
      const artist = await this.artistModel.find(
        { name: { $regex: name, $options: 'i' } },
        {
          name: {
           "$toUpper": '$name',
          },
          _id: {
            "$toString": '$_id',
          },
        },
      );
      return Promise.resolve(artist);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

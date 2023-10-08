import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Schema, Types } from 'mongoose';
import { IProduct } from 'src/models/projects/project.interface';

@Injectable()
export class ProjectManagementService {
  constructor(@InjectModel('project') private projectModel: Model<IProduct>) {}

  async myFirstService(data: any): Promise<any> {
    try {
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(data);
    }
  }

  // ======== projectAddEdit ========= //
  async projectAddEdit(data: any): Promise<any> {
    try {
      console.log('projectAddEdit hit=====>> ', data);

      if (data._id !== undefined && data._id !== null) {
        console.log('projectEdit hit=====>>');

        let updateResponse: any = await this.projectModel.findByIdAndUpdate(
          { _id: new mongoose.Types.ObjectId(data._id) },
          data,
        );
        return Promise.resolve(updateResponse);
      } else {
        console.log('project Add hit=====>>');

        let response: any = await this.projectModel.create(data);
        return Promise.resolve(response);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ================================= //

  // =========== Project Status Change ======== //
  async projectStatusChange(data: any): Promise<any> {
    try {
      //   console.log('Project Status Chnaged', data.project_id);
      if (data.project_id !== undefined && data.project_id !== null) {
        let updateStatusResponse: any =
          await this.projectModel.findByIdAndUpdate(
            { _id: new mongoose.Types.ObjectId(data.project_id) },
            { status: data.status },
          );
        return Promise.resolve(updateStatusResponse);
      } else {
        return Promise.reject('Please provide proper request');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ========================================== //

  // =========== Project Listing ======== //
  async projectListing(data: any): Promise<any> {
    try {
      let updateStatusResponse: any = await this.projectModel
        .find({})
        .limit(20);
      return Promise.resolve(updateStatusResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ========================================== //

  // =========== Project Single Feetch Details ======= //
  async projectSingleFetch(data: any): Promise<any> {
    try {
      let Response: any = await this.projectModel.find({
        _id: data._id,
      });

      return Promise.resolve(Response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ============================================ //

  // ======== Project Listing Count ========== //
  async projectListingCount(data: any): Promise<any> {
    try {
      let countResponse: any = await this.projectModel.count();

      return Promise.resolve(countResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ======================================= //

  //============= Find project =============
  async findProject(_id: string): Promise<any> {
    try {
      const project = await this.projectModel.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(_id),
          },
        },
        {
          $addFields: {
            artist_oids: {
              $map: {
                input: '$actors',
                in: {
                  $toObjectId: '$$this._id',
                },
              },
            },
          },
        },
        {
          $lookup: {
            from: 'artist_lists',
            let: {
              ids: '$artist_oids',
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $in: ['$_id', '$$ids'],
                  },
                },
              },
            ],
            as: 'artist_data',
          },
        },
        {
          $project: {
            artist_oids: 0,
          },
        },
      ]);
      return Promise.resolve(project[0]);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ======================================== //

  //============= Recommend project =============
  async recommendProject({query}): Promise<any> {
    try {
      // console.log('_id', _id) =====>    { query: { _id: '651ef401e19db24aef67c106' } }
      const project = await this.projectModel.aggregate([
        {
          $match: {
            _id: { $ne: new mongoose.Types.ObjectId(query._id) },
          },
        },
      ]);
      return Promise.resolve(project);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

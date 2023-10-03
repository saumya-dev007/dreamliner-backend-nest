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
      let updateStatusResponse: any = await this.projectModel.find({});
      return Promise.resolve(updateStatusResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ========================================== //
}

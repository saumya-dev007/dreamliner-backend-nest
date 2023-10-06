import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ITeam } from 'src/models/team/team.interface';

@Injectable()
export class TeamManagementService {
  constructor(@InjectModel('team_lists') private teamModel: Model<ITeam>) {}

  // =========== member Listing ======== //
  async teamListing(data: any): Promise<any> {
    try {
      let teamData: any = await this.teamModel
        .find(data.searchcondition)
        .skip(data.skip)
        .limit(data.limit)
        .sort(data.sort);
      return Promise.resolve(teamData);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ========================================== //

  // ======== member Listing Count ========== //
  async teamListingCount(data: any): Promise<any> {
    try {
      let countResponse: any = await this.teamModel.find(data.searchcondition).count();

      return Promise.resolve(countResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // ======================================= //

  async addTeam(data: any): Promise<any> {
    try {
      const team = this.teamModel.create(data);
      return Promise.resolve(team);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateTeam(_id: string, field: any): Promise<any> {
    try {
      const team = this.teamModel.findByIdAndUpdate(
        { _id: new mongoose.Types.ObjectId(_id) },
        { $set: { ...field } },
      );
      return Promise.resolve(team);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findMember(_id: string): Promise<any> {
    try {
      const member = await this.teamModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return Promise.resolve(member);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteMember(_id: string): Promise<any> {
    try {
      const member = await this.teamModel.findByIdAndDelete({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return Promise.resolve(member);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

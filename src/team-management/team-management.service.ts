import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ITeam } from 'src/models/team/team.interface';

@Injectable()
export class TeamManagementService {
    constructor(@InjectModel('team_lists') private teamModel:Model<ITeam>){}

    async addTeam(data:any):Promise<any>{
        try {
            const team = this.teamModel.create(data);
            return Promise.resolve(team);
        } catch (error) {
            return Promise.reject(error)
        }
    }



    async updateTeam(_id: string, field: any):Promise<any>{
        try {
            const team = this.teamModel.findByIdAndUpdate(
                { _id: new mongoose.Types.ObjectId(_id) },
                { $set: { ...field } },
              );
            return Promise.resolve(team);
        } catch (error) {
            return Promise.reject(error)
        }
    }


}

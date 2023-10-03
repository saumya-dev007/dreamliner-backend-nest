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
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(data);
    }
  }
  // ========================================== //
}

// async function addUpdateProjects(event, context, callback) {
//   console.log('addUpdateProjects hittttttt===== :>> ', event.headers);
//   try {
//     const data = JSON.parse(event.body);
//     const { access_token } = event.headers;
//     console.log('req--------', access_token, '--------->', data);
//     if(!access_token) throw "Invalid Access";
//     const auth = isAuth(access_token);
//     if(data.added_by !== auth) throw "Invalid Access";
//     let project;
//     const t1 = Math.round((new Date()));
//     await connectToDatabase();
//     console.log('Math.round((new Date()))2 :>> ', Math.round((new Date())) - t1);
//     if (data._id)
//       project = await projects.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(data._id) }, { $set: {...data} });
//     else
//       project = await projects.create(data);
//     console.log('project :>> ', project);
//     callback(null, {
//       statusCode: 200,
//       headers: headers,
//       body: JSON.stringify({
//         status: 'success',
//         result: {
//           projectData: project
//         }
//       })
//     });

//   } catch (err) {
//     console.log('error++++>>', err);
//     callback(null, {
//       statusCode: err.statusCode || 500,
//       headers: headers,
//       body: JSON.stringify({
//         status: 'error',
//         result: err
//       })
//     });
//   }
// }

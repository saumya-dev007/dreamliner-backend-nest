import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectManagementService {
    async myFirstService(data:any): Promise<any>{
        try {
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(data)
        }
    }



    
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



// async function login(event, context, callback) {
//   console.log('login hittttttt===== :>> ');
//   const { email, password, ipInfo } = JSON.parse(event.body);
//   console.log('req----------------->', email, password);
//   try {
//     const t1 = Math.round((new Date()));
//     await connectToDatabase();
//     console.log('Math.round((new Date()))2 :>> ', Math.round((new Date())) - t1);
//     let user = await users.find({ email });
//     console.log('user :>> ', user);
//     if (user.length === 0) throw ('User Not Found');
//     const hashPassword = await hash(password, 10);
//     console.log('hashPassword :>> ', hashPassword);
//     const valid = await compare(password, user[0].password);
//     console.log('valid :>> ', valid);
//     if (!valid) throw ('Invalid Password');
//     const accessToken = await createAccessToken(user[0]._id.toString());
//     const refreshToken = await createRefreshToken(user[0]._id.toString());
//     await users.findByIdAndUpdate({ _id: user[0]._id }, { $set: { refresh_token: refreshToken }, $push: { login_data: { ...ipInfo, login_time: Math.round((new Date())) } } });
//     callback(null, {
//       statusCode: 200,
//       headers: { ...headers, "Set-Cookie": `refresh_token=${refreshToken}` },
//       body: JSON.stringify({
//         status: 'success',
//         result: {
//           userData: user[0], accessToken: accessToken
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

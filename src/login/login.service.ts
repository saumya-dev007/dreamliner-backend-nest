import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/models/users/users.interface';

@Injectable()
export class LoginService {
  constructor(@InjectModel('users') private userModel: Model<IUser>) {}
  async login(data: any): Promise<any> {
    try {
      console.log('login hittttttt===== :>> ');
      const { email, password, ipInfo } = data;
      console.log('req----------------->', email, password, ipInfo);
      let user: any = await this.userModel.find({ });

      //   let user = await users.find({ email });
      //   console.log('user :>> ', user);
      //   if (user.length === 0) throw 'User Not Found';
      //   const hashPassword = await hash(password, 10);
      //   console.log('hashPassword :>> ', hashPassword);
      //   const valid = await compare(password, user[0].password);
      //   console.log('valid :>> ', valid);
      //   if (!valid) throw 'Invalid Password';
      // const accessToken = await createAccessToken(user[0]._id.toString());
      // const refreshToken = await createRefreshToken(user[0]._id.toString());
      // await users.findByIdAndUpdate({ _id: user[0]._id }, { $set: { refresh_token: refreshToken }, $push: { login_data: { ...ipInfo, login_time: Math.round((new Date())) } } });
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

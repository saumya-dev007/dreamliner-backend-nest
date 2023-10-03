import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as moment from 'moment';
import mongoose, { Model } from 'mongoose';
import { IUser } from 'src/models/users/users.interface';

@Injectable()
export class LoginService {
  constructor(@InjectModel('users') private userModel: Model<IUser>) {}
  async findByEmail(email: string, password: string): Promise<any> {
    try {
      console.log(' findByEmail hit-----:>> ', email, password);
      let user: any = await this.userModel
        .findOne({ email }, { login_data: 0 })
        .lean();
      console.log(user, ' findByEmail hit-----:>> ', user['password']);
      if (!user) return Promise.reject('User Not Found');
      if (user.password !== password) return Promise.reject('Invalid Password');
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async login(data: any): Promise<any> {
    try {
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
      const user: any = await this.userModel
        .findByIdAndUpdate(
          { _id: data._id },
          {
            $inc: { login_count: 1 },
            $push: {
              login_data: { ...data.ipInfo, login_time: moment().valueOf() },
            },
          },
        )
        .lean();
      delete user['password'];
      delete user['refresh_token'];
      delete user['login_data'];
      console.log('user', user);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

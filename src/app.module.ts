import { Module } from '@nestjs/common';
import { ProjectManagementModule } from './project-management/project-management.module';
import { LoginModule } from './login/login.module';
import { AuthenticationService } from './authentication/authentication.service';
import { configuration } from 'config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { UserSchema } from './models/users/users.schema';
import { ArtistModule } from './artist/artist.module';
import { TeamManagementModule } from './team-management/team-management.module';
@Module({
  imports: [
    ProjectManagementModule,
    LoginModule,


    ConfigModule.forRoot({
      load: [configuration],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongo_connection_string'),
        dbName: configService.get<string>('mongo_db_name'),
      }),
    }),

    ArtistModule,

    TeamManagementModule,

  ],
  controllers: [],
  providers: [AuthenticationService],
})
export class AppModule {}

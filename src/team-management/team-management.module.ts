import { Module } from '@nestjs/common';
import { TeamManagementController } from './team-management.controller';
import { TeamManagementService } from './team-management.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from 'src/models/team/team.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'team_lists', schema:TeamSchema}])],
  controllers: [TeamManagementController],
  providers: [TeamManagementService]
})
export class TeamManagementModule {}

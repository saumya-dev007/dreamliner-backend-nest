import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project_list } from 'src/models/projects/project.schema';

import { ProjectManagementController } from './project-management.controller';
import { ProjectManagementService } from './project-management.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'project_lists', schema: Project_list }]),
  ],
  controllers: [ProjectManagementController],
  providers: [ProjectManagementService],
})
export class ProjectManagementModule {}

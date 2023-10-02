import { Module } from '@nestjs/common';
import { ProjectManagementController } from './project-management.controller';
import { ProjectManagementService } from './project-management.service';

@Module({
  controllers: [ProjectManagementController],
  providers: [ProjectManagementService]
})
export class ProjectManagementModule {}

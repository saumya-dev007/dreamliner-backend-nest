import { Module } from '@nestjs/common';
import { ProjectManagementModule } from './project-management/project-management.module';

@Module({
  imports: [ProjectManagementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

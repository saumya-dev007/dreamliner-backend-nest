import { Test, TestingModule } from '@nestjs/testing';
import { TeamManagementController } from './team-management.controller';

describe('TeamManagementController', () => {
  let controller: TeamManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamManagementController],
    }).compile();

    controller = module.get<TeamManagementController>(TeamManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TeamManagementService } from './team-management.service';

describe('TeamManagementService', () => {
  let service: TeamManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamManagementService],
    }).compile();

    service = module.get<TeamManagementService>(TeamManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

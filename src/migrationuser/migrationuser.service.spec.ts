import { Test, TestingModule } from '@nestjs/testing';
import { MigrationUserService } from './migrationuser.service';

describe('MigrationUserService', () => {
  let service: MigrationUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MigrationUserService],
    }).compile();

    service = module.get<MigrationUserService>(MigrationUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

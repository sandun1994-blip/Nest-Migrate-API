import { Test, TestingModule } from '@nestjs/testing';
import { MigrationUserController } from './migrationuser.controller';

describe('MigrationUserController', () => {
  let controller: MigrationUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MigrationUserController],
    }).compile();

    controller = module.get<MigrationUserController>(MigrationUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

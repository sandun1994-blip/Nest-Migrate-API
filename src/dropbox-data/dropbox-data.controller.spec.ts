import { Test, TestingModule } from '@nestjs/testing';
import { DropboxDataController } from './dropbox-data.controller';

describe('DropboxDataController', () => {
  let controller: DropboxDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DropboxDataController],
    }).compile();

    controller = module.get<DropboxDataController>(DropboxDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

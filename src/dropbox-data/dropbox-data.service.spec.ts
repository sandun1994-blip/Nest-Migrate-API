import { Test, TestingModule } from '@nestjs/testing';
import { DropboxDataService } from './dropbox-data.service';

describe('DropboxDataService', () => {
  let service: DropboxDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DropboxDataService],
    }).compile();

    service = module.get<DropboxDataService>(DropboxDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

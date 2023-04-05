import { Module } from '@nestjs/common';
import { DropboxDataService } from './dropbox-data.service';
import { DropboxDataController } from './dropbox-data.controller';

@Module({
  providers: [DropboxDataService],
  controllers: [DropboxDataController]
})
export class DropboxDataModule {}

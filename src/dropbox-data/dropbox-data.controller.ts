import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DropboxDataService } from './dropbox-data.service';

@Controller('dropbox-data')
export class DropboxDataController {
  constructor(private serv: DropboxDataService) {}

  @Get()
  public async getAll(): Promise<any[]> {
    return await this.serv.getAll();
  }

  @Post()
  public async sendDoc(@Body() body: any): Promise<any> {
    return await this.serv.sendDoc(body);
  }

  @Get(':id')
  public async geOneUserFile(@Param('id') id: string): Promise<any[]> {
    return await this.serv.geOneUserFile(id);
  }

  @Get('metadata/:id')
  public async getFileMetaData(@Param('id') id: string): Promise<any[]> {
    return await this.serv.getFileMetaData(id);
  }
}

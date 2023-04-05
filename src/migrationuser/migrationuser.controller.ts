import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MigrationUserDTO } from './migrationuser.dto';
import { MigrationUserService } from './migrationuser.service';

@Controller('migrationuser')
export class MigrationUserController {
  constructor(private serv: MigrationUserService) {}

  @Get()
  public async getAll(): Promise<MigrationUserDTO[]> {
    return await this.serv.getAll();
  }

  @Get(':id')
  public async findById(@Param('id') id: number): Promise<MigrationUserDTO> {
    return await this.serv.getById(id);
  }

  @Post()
  public async post(@Body() dto: MigrationUserDTO): Promise<MigrationUserDTO> {
    return this.serv.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() dto: MigrationUserDTO,
  ): Promise<MigrationUserDTO> {
    return await this.serv.update(id, dto);
  }

  @Delete(':id')
  public async rempveById(@Param('id') id: number): Promise<MigrationUserDTO> {
    return await this.serv.delete(id);
  }
}

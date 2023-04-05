import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MigrationUser } from '../model/migrationuser.entity';
import { MigrationUserController } from './migrationuser.controller';
import { MigrationUserService } from './migrationuser.service';

@Module({
  imports: [TypeOrmModule.forFeature([MigrationUser])],
  controllers: [MigrationUserController],
  providers: [MigrationUserService],
  exports: [],
})
export class MigrationUserModule {}

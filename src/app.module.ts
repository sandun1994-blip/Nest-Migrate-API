/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { UserModule } from './user/user.module';
import { User } from './model/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { JobPostModule } from './jobpost/jobpost.module';
import { JobPostController } from './jobpost/jobpost.controller';
import { JobPostService } from './jobpost/jobpost.service';
import { JobPost } from './model/jobpost.entity';
import { SystemOperationModule } from './systemoperation/systemoperation.module';
import { SystemOperationController } from './systemoperation/systemoperation.controller';
import { SystemOperationService } from './systemoperation/systemoperation.service';
import { SystemOperation } from './model/systemoperation.entity';
import { SystemOperationFeatureModule } from './systemoperationfeature/systemoperationfeature.module';
import { SystemOperationFeature } from './model/systemoperationfeature.entity';
import { SystemOperationFeatureService } from './systemoperationfeature/systemoperationfeature.service';
import { SystemOperationFeatureController } from './systemoperationfeature/systemoperationfeature.controller';
import { MigrationUser } from './model/migrationuser.entity';
import { MigrationUserController } from './migrationuser/migrationuser.controller';
import { MigrationUserService } from './migrationuser/migrationuser.service';
import { MigrationUserModule } from './migrationuser/migrationuser.module';
import { ReminderModule } from './reminder/reminder.module';
import { Reminder } from './model/reminder.entity';
import { ReminderController } from './reminder/reminder.controller';
import { ReminderService } from './reminder/reminder.service';
import { SystemMenuItemModule } from './systemmenuitem/systemmenuitem.module';
import { UserSystemMenuItemModule } from './usersystemmenuitem/usersystemmenuitem.module';
import { SystemMenuItem } from './model/systemmenuitem.entity';
import { UserSystemMenuItem } from './model/usersystemmenuitem.entity';
import { SystemMenuItemController } from './systemmenuitem/systemmenuitem.controller';
import { UserSystemMenuItemController } from './usersystemmenuitem/usersystemmenuitem.controller';
import { SystemMenuItemService } from './systemmenuitem/systemmenuitem.service';
import { UserSystemMenuItemService } from './usersystemmenuitem/usersystemmenuitem.service';
import { DropboxDataModule } from './dropbox-data/dropbox-data.module';
import { DropboxDataController } from './dropbox-data/dropbox-data.controller';
import { DropboxDataService } from './dropbox-data/dropbox-data.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    TypeOrmModule.forFeature([User]),
    AuthenticationModule,
    JobPostModule,
    TypeOrmModule.forFeature([JobPost]),
    SystemOperationModule,
    TypeOrmModule.forFeature([SystemOperation]),
    SystemOperationFeatureModule,
    TypeOrmModule.forFeature([SystemOperationFeature]),
    MigrationUserModule,
    TypeOrmModule.forFeature([MigrationUser]),
    ReminderModule,
    TypeOrmModule.forFeature([Reminder]),
    SystemMenuItemModule,
    TypeOrmModule.forFeature([SystemMenuItem]),
    UserSystemMenuItemModule,
    TypeOrmModule.forFeature([UserSystemMenuItem]),
    DropboxDataModule,


  ],
  controllers: [AppController, JobPostController,UserController, AuthenticationController, SystemOperationController, SystemOperationFeatureController,MigrationUserController,ReminderController,SystemMenuItemController,UserSystemMenuItemController,DropboxDataController],
  providers: [AppService, JobPostService,UserService, AuthenticationService,SystemOperationService, SystemOperationFeatureService,MigrationUserService,ReminderService,SystemMenuItemService,UserSystemMenuItemService,DropboxDataService],
})
export class AppModule {}

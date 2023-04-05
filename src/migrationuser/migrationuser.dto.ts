import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsDate,
  IsBoolean,
  IsObject,
} from 'class-validator';
import * as moment from 'moment';
import { Reminder } from '../model/reminder.entity';
import { MigrationUser } from '../model/migrationuser.entity';
import { ReminderDTO } from 'src/reminder/reminder.dto';

export class MigrationUserDTO implements Readonly<MigrationUserDTO> {
  @ApiProperty({ required: true })
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  surname: string;

  @ApiProperty()
  @IsString()
  givenNames: string;

  @ApiProperty()
  @IsString()
  preferredName: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  passportCountry: string;

  @ApiProperty()
  @IsString()
  residenceCountry: string;

  @ApiProperty()
  @IsString()
  occupation: string;

  @ApiProperty()
  @IsBoolean()
  skillsAssessment: boolean;

  @ApiProperty()
  @IsBoolean()
  englishStudy: boolean;

  @ApiProperty()
  @IsBoolean()
  englishTest: boolean;

  @ApiProperty()
  @IsBoolean()
  initialConsultation: boolean;

  @ApiProperty()
  @IsBoolean()
  constitutionByAuzc: boolean;

  @ApiProperty()
  @IsBoolean()
  funds: boolean;

  @ApiProperty()
  @IsBoolean()
  referredByHa: boolean;

  @ApiProperty()
  @IsDate()
  createdDate: Date;

  @ApiProperty()
  @IsString()
  createdBy: string;

  @ApiProperty()
  @IsDate()
  lastUpdatedDate: Date;

  @ApiProperty()
  @IsString()
  lastUpdatedBy: string;

  @ApiProperty()
  @IsString()
  comments: string;

  // @ApiProperty()
  // @IsObject()
  // reminders: Reminder;

  public static from(dto: Partial<MigrationUserDTO>) {
    const mu = new MigrationUserDTO();
    mu.id = dto.id;
    mu.surname = dto.surname;
    mu.givenNames = dto.givenNames;
    mu.preferredName = dto.preferredName;
    mu.gender = dto.gender;
    mu.address = dto.address;
    mu.email = dto.email;
    mu.phone = dto.phone;
    mu.passportCountry = dto.passportCountry;
    mu.residenceCountry = dto.residenceCountry;
    mu.occupation = dto.occupation;
    mu.skillsAssessment = dto.skillsAssessment;
    mu.englishStudy = dto.englishStudy;
    mu.englishTest = dto.englishTest;
    mu.initialConsultation = dto.initialConsultation;
    mu.constitutionByAuzc = dto.constitutionByAuzc;
    mu.funds = dto.funds;
    mu.referredByHa = dto.referredByHa;
    mu.createdDate = this.getDate(dto.createdDate);
    mu.createdBy = dto.createdBy;
    mu.lastUpdatedBy = dto.lastUpdatedBy;
    mu.lastUpdatedDate = this.getDate(dto.lastUpdatedDate);
    mu.comments = dto.comments;
    // mu.reminders = ReminderDTO.fromEntity(dto.reminders);

    return mu;
  }
  public static fromEntity(entity: MigrationUser) {
    return this.from({
      id: entity.id,
      surname: entity.surname,
      givenNames: entity.givenNames,
      preferredName: entity.preferredName,
      gender: entity.gender,
      address: entity.address,
      email: entity.email,
      phone: entity.phone,
      passportCountry: entity.passportCountry,
      residenceCountry: entity.residenceCountry,
      occupation: entity.occupation,
      skillsAssessment: entity.skillsAssessment,
      englishStudy: entity.englishStudy,
      englishTest: entity.englishTest,
      initialConsultation: entity.initialConsultation,
      constitutionByAuzc: entity.constitutionByAuzc,
      funds: entity.funds,
      referredByHa: entity.referredByHa,
      createdDate: this.getDate(entity.createdDate),
      createdBy: entity.createdBy,
      lastUpdatedBy: entity.lastUpdatedBy,
      lastUpdatedDate: this.getDate(entity.lastUpdatedDate),
      comments: entity.comments,
    });
  }

  public static getDate(dateObj) {
    if (dateObj) {
      if (String(dateObj).startsWith('0000')) return null;
      else return moment(dateObj).format('yyyy-MM-DD HH:mm:ss');
    } else return dateObj;
  }
}

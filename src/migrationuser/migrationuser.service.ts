import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MigrationUser } from '../model/migrationuser.entity';
import { MigrationUserDTO } from './migrationuser.dto';

@Injectable()
export class MigrationUserService {
  constructor(
    @InjectRepository(MigrationUser)
    private readonly repo: Repository<MigrationUser>,
  ) {}

  public async getAll(): Promise<MigrationUserDTO[]> {
    return await this.repo
      .find()
      .then((migrationusers) =>
        migrationusers.map((e) => MigrationUserDTO.fromEntity(e)),
      );
  }

  public async getById(id: number): Promise<MigrationUserDTO> {
    const migrationuser = await this.repo
      .createQueryBuilder('migrationuser')
      .where('id = :id', { id: id })
      .getMany()
      .then((migrationuser) =>
        migrationuser.map((e) => MigrationUserDTO.fromEntity(e)),
      );

    if (!migrationuser || migrationuser.length == 0) {
      throw new UnprocessableEntityException('No records found for id:' + id);
    }

    return migrationuser[0];
  }

  public async create(dto: MigrationUserDTO): Promise<MigrationUserDTO> {
    const {
      id,
      surname,
      givenNames,
      preferredName,
      gender,
      address,
      email,
      phone,
      passportCountry,
      residenceCountry,
      occupation,
      skillsAssessment,
      englishStudy,
      englishTest,
      initialConsultation,
      constitutionByAuzc,
      funds,
      referredByHa,
      createdDate,
      createdBy,
      lastUpdatedBy,
      lastUpdatedDate,
      comments,
    } = dto;
    let existingFromId = null;
    try {
      existingFromId = await this.getById(id);
    } catch (ex) {
      console.log(ex);
    }
    if (existingFromId) {
      throw new UnprocessableEntityException('Id already in use');
    }
    const migrationUser: MigrationUser = await this.repo.save({
      id: id,
      surname: surname,
      givenNames: givenNames,
      preferredName: preferredName,
      gender: gender,
      address: address,
      email: email,
      phone: phone,
      passportCountry: passportCountry,
      residenceCountry: residenceCountry,
      occupation: occupation,
      skillsAssessment: skillsAssessment,
      englishStudy: englishStudy,
      englishTest: englishTest,
      initialConsultation: initialConsultation,
      constitutionByAuzc: constitutionByAuzc,
      funds: funds,
      referredByHa: referredByHa,
      createdDate: createdDate,
      createdBy: createdBy,
      lastUpdatedBy: lastUpdatedBy,
      lastUpdatedDate: lastUpdatedDate,
      comments: comments,
    });
    return MigrationUserDTO.fromEntity(migrationUser);
  }

  public async update(
    id: number,
    dto: MigrationUserDTO,
  ): Promise<MigrationUserDTO> {
    const {
      surname,
      givenNames,
      preferredName,
      gender,
      address,
      email,
      phone,
      passportCountry,
      residenceCountry,
      occupation,
      skillsAssessment,
      englishStudy,
      englishTest,
      initialConsultation,
      constitutionByAuzc,
      funds,
      referredByHa,
      createdDate,
      createdBy,
      lastUpdatedBy,
      lastUpdatedDate,
      comments,
    } = dto;

    const MigrationUserDTO: Promise<MigrationUserDTO> = this.getById(id);

    if (!MigrationUserDTO) {
      throw new UnprocessableEntityException('No records found for  Id:' + id);
    }

    await this.repo.update(
      { id },
      {
        surname: surname,
        givenNames: givenNames,
        preferredName: preferredName,
        gender: gender,
        address: address,
        email: email,
        phone: phone,
        passportCountry: passportCountry,
        residenceCountry: residenceCountry,
        occupation: occupation,
        skillsAssessment: skillsAssessment,
        englishStudy: englishStudy,
        englishTest: englishTest,
        initialConsultation: initialConsultation,
        constitutionByAuzc: constitutionByAuzc,
        funds: funds,
        referredByHa: referredByHa,
        createdDate: createdDate,
        createdBy: createdBy,
        lastUpdatedBy: lastUpdatedBy,
        lastUpdatedDate: lastUpdatedDate,
        comments: comments,
      },
    );

    return this.getById(id);
  }

  public async delete(id: number): Promise<MigrationUserDTO> {
    const migrationUser: Promise<MigrationUserDTO> = this.getById(id);

    if (!migrationUser) {
      throw new UnprocessableEntityException('No records found for id:' + id);
    }

    await this.repo.delete({ id });

    return migrationUser;
  }
}

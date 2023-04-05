/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reminder } from './reminder.entity';

@Entity({ name: 'MIGRATION_USER' })
export class MigrationUser {
  @PrimaryGeneratedColumn({name: 'ID'})
  id: number;

  @Column({ name: 'SURNAME', type: 'varchar', length: '100' })
  surname: string;

  @Column({ name: 'GIVEN_NAMES', type: 'varchar', length: '200' })
  givenNames: string;

  @Column({ name: 'PREFEREED_NAME', type: 'varchar', length: '100' })
  preferredName: string;

  @Column({ name: 'GENDER', type: 'varchar', length: '10' })
  gender: string;

  @Column({ name: 'ADDRESS', type: 'varchar', length: '500' })
  address: string;

  @Column({ name: 'EMAIL', type: 'varchar', length: '60' })
  email: string;

  @Column({ name: 'PHONE', type: 'varchar', length: '30' })
  phone: string;

  @Column({ name: 'PASSPORT_COUNTRY', type: 'varchar', length: '30' })
  passportCountry: string;

  @Column({ name: 'RESIDENCE_COUNTRY', type: 'varchar', length: '30' })
  residenceCountry: string;

  @Column({ name: 'OCCUPATION', type: 'varchar', length: '50' })
  occupation: string;

  @Column({ name: 'SKILLS_ASSESSMENT', type: 'boolean' })
  skillsAssessment: boolean;

  @Column({ name: 'ENGLISH_STUDY', type: 'boolean' })
  englishStudy: boolean;

  @Column({ name: 'ENGLISH_TEST', type: 'boolean' })
  englishTest: boolean;

  @Column({ name: 'INITIAL_CONSULTATION', type: 'boolean' })
  initialConsultation: boolean;

  @Column({ name: 'CONSTITUTION_BY_AUZC', type: 'boolean' })
  constitutionByAuzc: boolean;

  @Column({ name: 'FUNDS', type: 'boolean' })
  funds: boolean;

  @Column({ name: 'REFERRED_BY_HA', type: 'boolean' })
  referredByHa: boolean;

  @Column({ name: 'CREATED_DATE', type: 'timestamp' })
  createdDate: Date;

  @Column({ name: 'CREATED_BY', type: 'varchar', length: 100 })
  createdBy: string;

  @Column({ name: 'LAST_UPDATED_DATE', type: 'timestamp' })
  lastUpdatedDate: Date;

  @Column({ name: 'LAST_UPDATED_BY', type: 'varchar', length: 100 })
  lastUpdatedBy: string;

  @Column({ name: 'COMMENTS',type: 'varchar', length: 500 })
  comments: string;

  // @OneToMany(
  //   () => Reminder,
  //   (reminder) => reminder.migrationUser,
  // )
  // @JoinColumn({ name: 'ID' })
  // reminders: Reminder[];
}

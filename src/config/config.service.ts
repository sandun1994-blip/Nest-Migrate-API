/* eslint-disable @typescript-eslint/no-var-requires */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();
class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}
  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public getJwtSecret() {
    return this.getValue('JWT_SECRET', true);
  }
  public getJwtExpirationTime() {
    return this.getValue('JWT_EXPIRATION_TIME', true);
  }
  public isProduction() {
    const mode = this.getValue('NODE_ENV', false);
    return mode != 'DEV';
  }
  public getSourcePath() {
    return this.getValue('SOURCE_PATH', false);
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    console.log('getTypeOrmConfig-->' + this.isProduction());
    const SOURCE_PATH_PREFIX = this.isProduction()
      ? (this.getSourcePath() ? this.getSourcePath() : '') + 'dist'
      : 'src';
    console.log('SOURCE_PATH-->' + SOURCE_PATH_PREFIX);
    return {
      type: 'mysql',
      host: this.getValue('DB_HOST'),
      port: parseInt(this.getValue('DB_PORT')),
      username: this.getValue('DB_USERNAME'),
      password: this.getValue('DB_PASSWORD'),
      database: this.getValue('DB_NAME'),
      synchronize: this.getValue('DB_SYNC') == 'true',
      logging: this.getValue('DB_LOGGING') == 'true',
      entities: [`${SOURCE_PATH_PREFIX}/**/**.entity{.ts,.js}`],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      cli: {
        migrationsDir: 'src/migration',
      },

      ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DB_HOST',
  'DB_PORT',
  'DB_USERNAME',
  'DB_PASSWORD',
  'DB_NAME',
]);

export { configService };

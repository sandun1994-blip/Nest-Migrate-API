import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (!configService.isProduction()) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Nestjs-TypeORM API')
        .setDescription('Nestjs-TypeORM API')
        .build(),
    );

    SwaggerModule.setup('docs', app, document);
  }
  app.enableCors();
  await app.listen(configService.getPort());
}
bootstrap();

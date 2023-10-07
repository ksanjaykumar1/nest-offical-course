import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // by enabling whitelisting it filters out properties that
  // that should not be recived by the method handler
  // by whitelisting any property not listed is
  // automatically stripped from the resulting object.

  // ForbidNonWhitelisted will stop a request from being processed
  // if any nonwhitelisted properties are present
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // This will apply validation globally to all routes
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Application is running on: ${process.env.PORT ?? 3000}`);
  console.log(`Application is running on: ${process.env.NODE_ENV ?? 'development'}`);
}
bootstrap();

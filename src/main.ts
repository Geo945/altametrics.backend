import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {cleanUpDatabase, createInvoices, createUsers} from "./utils";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  await app.listen(4000);

  await cleanUpDatabase()

  createUsers()

  createInvoices()
}
bootstrap();

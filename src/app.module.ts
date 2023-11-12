import { Module } from '@nestjs/common';

import { InvoiceController } from './controller/InvoiceController';
import { UserController } from './controller/UserController';

import { InvoiceService} from "./service/InvoiceService";
import { UserService } from "./service/UserService";

@Module({
  imports: [],
  controllers: [InvoiceController, UserController],
  providers: [InvoiceService, UserService],
})
export class AppModule {}

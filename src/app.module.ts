import {Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { InvoiceController } from './controller/InvoiceController';
import { UserController } from './controller/UserController';

import { InvoiceService} from "./service/InvoiceService";
import { UserService } from "./service/UserService";
import {LoginMiddleware} from "./middleware/LoginMiddleware";

@Module({
  imports: [],
  controllers: [InvoiceController, UserController],
  providers: [InvoiceService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LoginMiddleware)
        .forRoutes(InvoiceController);
  }
}

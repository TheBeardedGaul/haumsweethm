import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { Service1Controller } from './controllers/service1.controller';
import { AppService } from './services/app.service';
import { AppService1 } from './services/app.service1';

@Module({
  imports: [],
  controllers: [AppController, Service1Controller],
  providers: [AppService, AppService1],
})
export class AppModule {}

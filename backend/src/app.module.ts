import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { Service1Controller } from './controllers/service1.controller';
import { AppService } from './services/app.service';
import { AppService1 } from './services/app.service1';
import { GroupController } from './controllers/app.group.controller';
import { GroupService } from './services/app.group.service';

@Module({
  imports: [],
  controllers: [AppController, Service1Controller, GroupController],
  providers: [AppService, AppService1, GroupService],
})
export class AppModule {}

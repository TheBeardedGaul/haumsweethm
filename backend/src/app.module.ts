import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import { Service1Controller } from './controllers/service1.controller';
import { AppService } from './services/app.service';
import { AppService1 } from './services/app.service1';
import { GroupModule } from './group.module';
import { LaumioModule } from './laumio.module';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*-entity{.ts,.js}'],
  }), GroupModule, LaumioModule],
  controllers: [AppController, Service1Controller],
  providers: [AppService, AppService1],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

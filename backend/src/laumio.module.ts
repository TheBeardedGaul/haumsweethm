import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laumio } from './business/laumio-entity';
import { LaumioService } from './services/app.laumio.service';
import { LaumioController } from './controllers/app.laumio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Laumio])],
  providers: [LaumioService],
  controllers: [LaumioController],
})
export class LaumioModule {}
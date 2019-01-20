import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './business/group-entity';
import { GroupService } from './services/app.group.service';
import { GroupController } from './controllers/app.group.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupService],
  controllers: [GroupController],
})
export class GroupModule {}
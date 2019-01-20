import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../business/group-entity';

@Injectable()
export class GroupService {

    constructor(@InjectRepository(Group) private readonly groupRepository: Repository<Group>) {
        
    }

    async findAll(): Promise<Group[]> {
        return await this.groupRepository.find();
    }

    async findByName(id: string): Promise<Group> {
        return await this.groupRepository.find({id})[0];
    }

    async create(id: string): Promise<boolean> {
        const group = this.groupRepository.create();
        group.id = id;
        await this.groupRepository.insert(group);
        return Promise.resolve(true);
    }

    async clearAll(): Promise<Group[]> {
        return await this.groupRepository.remove(await this.findAll());
    }
}

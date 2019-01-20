import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Laumio } from '../business/laumio-entity';
import { Repository } from 'typeorm';

@Injectable()
export class LaumioService {

    constructor(@InjectRepository(Laumio) private readonly laumioRepository: Repository<Laumio>) {
        
    }

    async findAll(): Promise<Laumio[]> {
        return await this.laumioRepository.find();
    }

    async findByName(id: string): Promise<Laumio> {
        return await this.laumioRepository.find({id})[0];
    }

    async create(id: string): Promise<boolean> {
        const group = this.laumioRepository.create();
        group.id = id;
        await this.laumioRepository.insert(group);
        return Promise.resolve(true);
    }

    async clearAll(): Promise<Laumio[]> {
        return await this.laumioRepository.remove(await this.findAll());
    }
  
}

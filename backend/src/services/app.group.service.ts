import { Injectable } from '@nestjs/common';
import { Group } from '../business/Group';

@Injectable()
export class GroupService {

    public groupList: Group[] = [];

    create(id: string): Promise<boolean> {
        let res = true;
        const group = new Group(id);
        this.groupList.push(group);
        console.log(`Group ${id} created`);
        return Promise.resolve(true);
    }
}

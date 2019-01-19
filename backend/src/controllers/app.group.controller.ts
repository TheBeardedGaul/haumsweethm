import { Controller, Get, Post, Body } from "@nestjs/common";
import { GroupService } from "../services/app.group.service";

@Controller("groups")
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get()
    async findAll(): Promise<any> {
        return Promise.resolve(this.groupService.groupList);
    }

    @Post()
    async create(@Body() id: string): Promise<any> {
        return this.groupService.create(id).then((result) => {
            return Promise.resolve(result);
        });
    }

}
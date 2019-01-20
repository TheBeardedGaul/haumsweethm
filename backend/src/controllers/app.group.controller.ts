import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { GroupService } from "../services/app.group.service";

@Controller("groups")
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get()
    async findAll(): Promise<any> {
        return Promise.resolve(this.groupService.findAll());
    }

    @Get("/:id")
    async findOne(@Param('id') id: string): Promise<any> {
        return Promise.resolve(this.groupService.findByName(id));
    }

    @Post()
    async create(@Body() id: string): Promise<any> {
        return this.groupService.create(id);
    }

    @Get("/add/:id")
    async add(@Param('id') id: string): Promise<any> {
        return this.groupService.create(id);
    }

    @Delete()
    async delete(): Promise<any> {
        return this.groupService.clearAll();
    }

}
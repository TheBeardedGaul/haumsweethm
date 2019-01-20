import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { LaumioService } from "../services/app.laumio.service";

@Controller("laumios")
export class LaumioController {
    constructor(private readonly laumioService: LaumioService) {}

    @Get()
    async findAll(): Promise<any> {
        return Promise.resolve(this.laumioService.findAll());
    }

    @Get("/:id")
    async findOne(@Param('id') id: string): Promise<any> {
        return Promise.resolve(this.laumioService.findByName(id));
    }

    @Post()
    async create(@Body() id: string): Promise<any> {
        return this.laumioService.create(id);
    }

    @Get("/add/:id")
    async add(@Param('id') id: string): Promise<any> {
        return this.laumioService.create(id);
    }

    @Delete()
    async delete(): Promise<any> {
        return this.laumioService.clearAll();
    }

}
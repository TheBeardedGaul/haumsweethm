import { Controller, Get } from '@nestjs/common';
import { AppService1 } from '../services/app.service1';

@Controller("service1")
export class Service1Controller {
  constructor(private readonly appService: AppService1) {}

  @Get()
  getHello(): string {
    return this.appService.getService1();
  }
}

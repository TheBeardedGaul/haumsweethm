import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService1 {
  getService1(): any {
    return {service: "AppService1"};
  }
}

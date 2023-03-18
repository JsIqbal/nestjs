import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './app.service';

@Controller()
export class AppController {
  private appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('/users')
  createUser(@Body() body: User): User {
    return this.appService.createUser(body.email, body.password);
  }
}

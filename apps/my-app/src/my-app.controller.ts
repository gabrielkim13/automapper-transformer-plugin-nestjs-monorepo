import { Controller, Get, Query } from '@nestjs/common';

import { UserDto } from '@libs/my-lib';

import { MyAppService } from './my-app.service';

@Controller()
export class MyAppController {
  constructor(private readonly myAppService: MyAppService) {}

  @Get('user')
  getUser(
    @Query('firstName') firstName: string,
    @Query('lastName') lastName: string,
  ): UserDto {
    return this.myAppService.getUser(firstName, lastName);
  }
}

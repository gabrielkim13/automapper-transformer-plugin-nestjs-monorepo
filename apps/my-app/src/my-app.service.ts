import { Injectable } from '@nestjs/common';

import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import { User, UserDto } from '@libs/my-lib';

@Injectable()
export class MyAppService {
  constructor(@InjectMapper() private readonly mapper: Mapper) {}

  getUser(firstName: string, lastName: string): UserDto {
    const user = new User(firstName, lastName);

    return this.mapper.map(user, User, UserDto);
  }
}

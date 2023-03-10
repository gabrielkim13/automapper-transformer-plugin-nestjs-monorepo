import { Injectable } from '@nestjs/common';

import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';

import { User } from './entities';
import { UserDto } from './dtos';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(
        mapper,
        User,
        UserDto,
        forMember(
          (d) => d.fullName,
          mapFrom((s) => `${s.firstName} ${s.lastName}`),
        ),
      );
    };
  }
}

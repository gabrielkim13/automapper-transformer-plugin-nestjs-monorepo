import { Test } from '@nestjs/testing';

import { classes } from '@automapper/classes';
import { Mapper } from '@automapper/core';
import { AutomapperModule, DEFAULT_MAPPER_TOKEN } from '@automapper/nestjs';

import { User } from './entities';
import { UserDto } from './dtos';

import { UserProfile } from './user.profile';

describe('UserProfile', () => {
  let mapper: Mapper;

  beforeAll(async () => {
    const testingModule = await Test.createTestingModule({
      imports: [AutomapperModule.forRoot({ strategyInitializer: classes() })],
      providers: [UserProfile],
    }).compile();

    mapper = testingModule.get(DEFAULT_MAPPER_TOKEN);
  });

  test('map entity to dto', () => {
    const entity = new User('Gabriel', 'Kim');

    const dto = mapper.map(entity, User, UserDto);

    expect(dto).toBeInstanceOf(UserDto);
    expect(dto.firstName).toBe('Gabriel');
    expect(dto.lastName).toBe('Kim');
    expect(dto.fullName).toBe('Gabriel Kim');
  });

  test('map dto to entity', () => {
    const dto = new UserDto();

    dto.firstName = 'Gabriel';
    dto.lastName = 'Kim';
    dto.fullName = 'Gabriel Kim';

    const entity = mapper.map(dto, UserDto, User);

    expect(entity).toBeInstanceOf(User);
    expect(entity.firstName).toBe('Gabriel');
    expect(entity.lastName).toBe('Kim');
  });
});

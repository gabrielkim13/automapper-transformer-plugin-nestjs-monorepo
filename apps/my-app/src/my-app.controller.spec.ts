import { Test, TestingModule } from '@nestjs/testing';

import { MyLibModule } from '@libs/my-lib';

import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';

describe('MyAppController', () => {
  let myAppController: MyAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MyLibModule],
      controllers: [MyAppController],
      providers: [MyAppService],
    }).compile();

    myAppController = app.get<MyAppController>(MyAppController);
  });

  describe('getUser', () => {
    it('should return user dto', () => {
      const userDto = myAppController.getUser('Gabriel', 'Kim');

      expect(userDto.firstName).toBe('Gabriel');
      expect(userDto.lastName).toBe('Kim');
      expect(userDto.fullName).toBe('Gabriel Kim');
    });
  });
});

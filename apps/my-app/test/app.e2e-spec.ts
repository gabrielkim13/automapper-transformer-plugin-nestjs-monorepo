import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MyAppModule } from './../src/my-app.module';

describe('MyAppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MyAppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user?firstName=Gabriel&lastName=Kim')
      .expect(200)
      .expect(
        '{"firstName":"Gabriel","lastName":"Kim","fullName":"Gabriel Kim"}',
      );
  });
});

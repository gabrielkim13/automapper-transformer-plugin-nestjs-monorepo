import { Module } from '@nestjs/common';

import { MyLibModule } from '@libs/my-lib';

import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';

@Module({
  imports: [MyLibModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}

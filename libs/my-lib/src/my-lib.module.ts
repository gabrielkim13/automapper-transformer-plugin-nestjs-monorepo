import { Module } from '@nestjs/common';

import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';

import { UserProfile } from './user.profile';

@Module({
  imports: [AutomapperModule.forRoot({ strategyInitializer: classes() })],
  providers: [UserProfile],
  exports: [UserProfile],
})
export class MyLibModule {}

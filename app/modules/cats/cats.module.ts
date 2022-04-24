import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TaskLocker } from './task-locker';

@Module({
  controllers: [CatsController],
  providers: [CatsService, TaskLocker],
})
export class CatsModule {}

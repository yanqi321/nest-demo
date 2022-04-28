import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ScheduleLocker } from './schedule-locker';

@Module({
  controllers: [CatsController],
  providers: [CatsService, ScheduleLocker],
  exports: [ScheduleLocker],
})
export class CatsModule {}

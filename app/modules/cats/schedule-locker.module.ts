import { Module } from '@nestjs/common';
import { Redis } from '../app/redis.module';
import { ScheduleLocker } from './schedule-locker';

@Module({
  imports: [Redis],
  providers: [ScheduleLocker],
  exports: [ScheduleLocker],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ScheduleLockerModule {}

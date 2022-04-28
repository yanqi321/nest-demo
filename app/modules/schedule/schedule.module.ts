import { Module } from '@nestjs/common';
import { ScheduleModule } from 'nestjs-schedule';
import { ScheduleLocker } from './schedule-locker';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [ScheduleLocker],
  exports: [ScheduleLocker],
})
export class MyScheduleModule {}

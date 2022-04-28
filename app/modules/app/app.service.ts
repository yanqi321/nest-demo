import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectSchedule, Schedule } from 'nestjs-schedule';
import { ScheduleLocker } from '../schedule/schedule-locker';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);
  constructor(
    @InjectSchedule() private readonly schedule: Schedule,
    private readonly locker: ScheduleLocker,
  ) {}

  async onModuleInit() {
    this.schedule.createIntervalJob(
      () => {
        this.logger.debug('=------------------interval job');
      },
      20000,
      this.locker,
      { name: 'interval-job' },
    );
  }

  getHello(): string {
    return 'Hello World!';
  }
}

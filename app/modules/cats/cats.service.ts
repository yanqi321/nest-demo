import { Injectable, Logger } from '@nestjs/common';
import { Cron, UseLocker } from 'nestjs-schedule';
import { ScheduleLocker } from './task-locker';

@Injectable()
export class CatsService {
  private logger = new Logger(CatsService.name);

  getCats() {
    return {
      cats: ['cat1', 'cat2', 'cat3'],
    };
  }

  @Cron('*/10 * * * * *', { name: 'cron-job' })
  @UseLocker(ScheduleLocker)
  handleCron() {
    this.logger.debug('run distributed cron job');
  }

  @Cron('*/15 * * * * *', { name: 'cron-job2' })
  @UseLocker(ScheduleLocker)
  handleCron2() {
    this.logger.debug('run distributed cron job2');
  }
}

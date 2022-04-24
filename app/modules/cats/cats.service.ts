import { Injectable, Logger } from '@nestjs/common';
import { Cron, UseLocker } from '../schedule';
import { TaskLocker } from './task-locker';

@Injectable()
export class CatsService {
  private logger = new Logger(CatsService.name);

  getCats() {
    return {
      cats: ['cat1', 'cat2', 'cat3'],
    };
  }

  @Cron('*/7 * * * * *', { name: 'cron-job' })
  @UseLocker(TaskLocker)
  handleCron() {
    this.logger.debug('run distributed cron job');
  }
}

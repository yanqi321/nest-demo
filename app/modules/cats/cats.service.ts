import { Injectable, Logger } from '@nestjs/common';
import { Cron } from 'nestjs-schedule';

@Injectable()
export class CatsService {
  private logger = new Logger(CatsService.name);

  getCats() {
    return {
      cats: ['cat1', 'cat2', 'cat3'],
    };
  }

  @Cron('*/10 * * * * *', { name: 'cron-job' })
  handleCron() {
    this.logger.debug('run distributed cron job');
  }

  @Cron('*/15 * * * * *', { name: 'cron-job2' })
  handleCron2() {
    this.logger.debug('run distributed cron job2');
  }
}

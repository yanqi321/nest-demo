import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectSchedule, Schedule } from '../schedule';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);
  constructor(@InjectSchedule() private readonly schedule: Schedule) {}

  async onModuleInit() {
    this.schedule.createIntervalJob(() => {
      this.logger.debug('=------------------interval job');
    }, 2000);
  }

  getHello(): string {
    return 'Hello World!';
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { Locker } from 'nestjs-schedule';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class ScheduleLocker implements Locker {
  constructor(private readonly redisService: RedisService) {}

  private readonly logger = new Logger(ScheduleLocker.name);

  release(jobName: string): any {
    const lockKey = this.getLockKey(jobName);
    setTimeout(async () => {
      await this.redisService.getClient().del(lockKey);
    }, 4 * 1000);
  }

  async tryLock(jobName: string): Promise<boolean> {
    const lockKey = this.getLockKey(jobName);

    const locked = await this.redisService
      .getClient()
      .set(lockKey, 1, 'EX', 60 * 3, 'NX');

    if (!locked) {
      return false;
    }
    this.logger.debug(`${jobName} locked`);
    return true;
  }

  private getLockKey(jobName): string {
    return `schedule:lock:${jobName}`;
  }
}

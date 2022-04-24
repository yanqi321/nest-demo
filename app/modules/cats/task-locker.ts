import { Injectable, Logger } from '@nestjs/common';
import { Locker } from '../schedule/interfaces/locker.interface';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class TaskLocker implements Locker {
  constructor(private readonly redisService: RedisService) {}

  private name: string;
  private lockKey: string;
  private logger = new Logger('TaskLocker');

  init(name: string): void {
    this.name = name;
    this.lockKey = `schedule:lock:${this.name}`;
  }

  release(): any {
    this.logger.log(`${this.name} release lock`);
    setTimeout(() => {
      this.redisService.getClient().del(this.lockKey);
    }, 4 * 1000);
  }

  async tryLock(): Promise<boolean> {
    const locked = await this.redisService
      .getClient()
      .set(this.lockKey, 1, 'EX', 60 * 3, 'NX');

    if (!locked) {
      this.logger.error('GET LOCK_FAILED', this.name);
      return false;
    }
    this.logger.debug(`${this.name} locked`);
    return true;
  }
}

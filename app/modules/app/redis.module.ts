import { Logger } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';

export const Redis: any = RedisModule.register({
  url: 'redis://:88xrKYkVGb9i7eKu@172.28.49.74:6379/1',
  enableReadyCheck: true,
  onClientReady: async (client) => {
    client.on('ready', () => {
      Logger.log('Redis client is ready.', 'RedisService');
    });

    client.on('error', (error) => {
      Logger.error(error.message, error.stacks, 'RedisService');
    });
  },
});

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from '../cats/cats.module';
import { ScheduleModule } from 'nestjs-schedule';
import { Redis } from './redis.module';
import { ScheduleLockerModule } from '../cats/schedule-locker.module';
import { ScheduleLocker } from '../cats/schedule-locker';

@Module({
  imports: [
    ScheduleModule.forRoot({
      imports: [ScheduleLockerModule],
      useClass: ScheduleLocker,
    }),
    Redis,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from '../cats/cats.module';
import { ScheduleModule } from 'nestjs-schedule';
import { Redis } from './redis.module';

@Module({
  imports: [ScheduleModule.forRoot(), Redis, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

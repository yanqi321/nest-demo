import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from '../cats/cats.module';
import { Redis } from './redis.module';
import { MyScheduleModule } from '../schedule/schedule.module';

@Module({
  imports: [Redis, CatsModule, MyScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

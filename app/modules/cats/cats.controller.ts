import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  getCats() {
    return this.catService.getCats();
  }
}

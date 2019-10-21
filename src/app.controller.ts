import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Card } from './card.interface';
@Controller('mtg-app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('cards')
  getCards(): [Card] {
    return this.appService.getAllCards();
  }




}

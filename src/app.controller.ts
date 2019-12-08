import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
// we need to import card to this controller so it is defined
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

  @Post('cards')
  createCard(@Body() card: Card) {
    console.log(card);
    this.appService.postOne(card);
    return card;
  }
}

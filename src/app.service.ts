import { Injectable } from '@nestjs/common';
import { Card } from './card.interface';
@Injectable()
export class AppService {


  cards: [Card] = [{ id: 1, name: 'chickenbutt' }]
  getHello(): string {
    return 'Hello World!';
  }



  getAllCards(): [Card] {
    // todo: switch to actual database
    return this.cards;
  }
}

import { Injectable } from '@nestjs/common';
// we need to import card to this controller so it is defined
import { Card } from './card.interface';
@Injectable()
export class AppService {

  // this is our fake database for now
  cards: [Card] = [
    { id: 1, name: 'chickenbutt' }
  ];
  
  getHello(): string {
    return 'Hello World!';
  }

  getAllCards(): [Card] {
    // TODO: switch to actual database
    return this.cards;
  }

  postOne(theCardThatGotPosted: Card) {
    return this.cards.push(theCardThatGotPosted);
  }
}

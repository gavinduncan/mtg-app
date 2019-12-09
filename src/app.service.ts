import { Injectable } from '@nestjs/common';
// we need to import card to this controller so it is defined
import { Card } from './card.interface';
@Injectable()
export class AppService {

  // this is our fake database for now
  cards: Card[] = [
    { id: 1, name: 'chickenbutt' }
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getAllCards(): Card[] {
    // TODO: switch to actual database
    return this.cards;
  }
  
  // TODO: not working yet
  deleteOne(cardId: number) {
    // let newarray: Card[];
    // newarray = this.cards.filter(currentCard => {
    //   console.log(currentCard.id); console.log(cardId);
    //   return currentCard.id !== cardId;
    // }); 
    // delete this.cards[cardId];

    let cardToDelete = this.cards.filter(card =>{
      return card.id === cardId;    
    });

    let index = this.cards.indexOf(cardToDelete[0], 1);

    this.cards.splice(index, 1);
    console.log(this.cards);
    
    return this.cards;
  }

  postOne(theCardThatGotPosted: Card) {
    return this.cards.push(theCardThatGotPosted);
  }
} // end of service class

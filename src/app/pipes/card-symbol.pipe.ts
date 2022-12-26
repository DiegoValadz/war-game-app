import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardSymbol'
})
export class CardSymbolPipe implements PipeTransform {

  transform(cardName: string, ...args: unknown[]): string {

    let card = cardName.split("of");
    if(card.length<2){
      if(card[0] == "FACE_DOWN")        
      return "?"
      else
      return "";
    }
    return this.getSymbol(card[1].trim());
  }

  getSymbol(value:string){
    switch(value){
      case "Spades":
        return "♠";
      case "Hearts":
        return "♥";
      case "Diamonds":
        return "♦";    
      case "Clubs":
        return "♣"; 
       default:
        return"";    
    }
  }


}

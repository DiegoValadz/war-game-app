import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/game.service';
import { Game } from '../../core/models/Game';
import { Event } from 'src/app/core/models/Event';
import { OnChanges } from '@angular/core';
import { Card } from '../../core/models/Card';
import { Player } from '../../core/models/Player';
import { Scores } from '../../core/models/Scores';

const noCard: Card = {
  id: '0',
  name: 'NO_CARD',
}

const faceDownCard: Card = {
  id: '1',
  name: 'FACE_DOWN',
}



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnChanges {
  game: Game;
  isLoading: boolean;
  eventsToDisplay: Event[] = [];
  leftCard: Card = noCard;
  rightCard: Card = noCard;
  gameInterval:number = 1000
  pool:Card[] = []
  scores:Scores[]
  interval
  constructor(private gameService: GameService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.gameService.getComputedGame().subscribe((res) => {
      console.log(res);
      this.game = res;
      this.isLoading = false;
      this.startGame();
      console.log(this.eventsToDisplay);
    });

    this.gameService.getScores().subscribe(res=>{
      console.log(res)
      this.scores = res;
    })
  }
  startGame() {
    this.game.events.reverse();

     this.interval  = setInterval(() => {
      let event = this.game.events.pop();
      this.executeEvent(event);
      this.eventsToDisplay.push(event);
    }, this.gameInterval);


  }
  executeEvent(event: Event) {
    switch (event.action) {
      case 'PLAY_CARD': {
        let playerIndex:number = this.getPlayerIndex(event.player);
        if (playerIndex == 0) {
          this.leftCard = this.game.players[0].deck.filter(
            (item) => item.name === event.card
          )[0];
        } else {
          this.rightCard = this.game.players[1].deck.filter(
            (item) => item.name === event.card
          )[0];
        }
        for (var i = this.game.players[playerIndex].deck.length - 1; i >= 0; --i) {
          if (this.game.players[playerIndex].deck[i].name == event.card) {
            let extracted = this.game.players[playerIndex].deck.splice(i, 1)
            this.pool.push(...extracted);              
          }
        }
        break; 
      }
      case "TAKES_THE_HAND":{
        let playerIndex:number = this.getPlayerIndex(event.player);
        this.game.players[playerIndex].deck.push(...this.pool)
        this.pool = []
        this.leftCard = noCard;
        this.rightCard = noCard;
        break; 
      }
      case "BEGIN_WAR":{
      
        break; 
      }
      case "FACE_DOWN_CARD_TO_POOL":{
        let playerIndex:number = this.getPlayerIndex(event.player);
        if (playerIndex == 0) {
          this.leftCard = faceDownCard;        
        }else{
          this.rightCard = faceDownCard;
        }
        this.pool.push(this.game.players[playerIndex].deck.filter(
          (item) => item.name === event.card
        )[0])

        
          break; 
      }
    }
  }
  getPlayerIndex(playerName: string) {
    return this.game.players.filter((player) => player.name === playerName)[0].playerId-1;
  }


  ngOnChanges() { }
}

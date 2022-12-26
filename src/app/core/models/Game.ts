import { Event } from "./Event";
import { Player } from "./Player";

export interface Game {
  id: string;
  winner: Player;
  events: Array<Event>;
  players:Array<Player>
}

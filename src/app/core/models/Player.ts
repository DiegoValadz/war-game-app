import { Queue } from '../../Util/Queue';
import { Card } from './Card';


export interface Player {
  playerId: 1,
  deckId: string,
  name?: string,
  firstName?: string,
  lastName?: string,
  deck: Array<Card>
}


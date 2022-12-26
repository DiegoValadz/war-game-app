import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './models/Game';
import { environment } from 'src/environments/environment';
import { Scores } from './models/Scores';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  

  constructor(private httpClient:HttpClient) { }

  getComputedGame(){
    return this.httpClient.get<Game>(environment.api_url+"/games/computed");
  }

  getScores(){
    return this.httpClient.get<Scores[]>(environment.api_url+"/players/scores");
  }
}

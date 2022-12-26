import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() isMini;
  @Input() card:Card
  @Input() type:string

  constructor() { }

  ngOnInit(): void {

  }

}

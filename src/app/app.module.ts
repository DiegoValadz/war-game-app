import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './components/game/game.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CardSymbolPipe } from './pipes/card-symbol.pipe';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoadingComponent,
    CardComponent,
    CardSymbolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

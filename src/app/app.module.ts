import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameModule } from './modules/game/game.module';
import { DalleModule } from './modules/dalle/dalle.module';
import { CaptchaComponent } from './modules/captcha/captcha.component';



@NgModule({
  declarations: [
    AppComponent,
    CaptchaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule,
    DalleModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

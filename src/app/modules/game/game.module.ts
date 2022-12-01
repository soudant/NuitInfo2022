import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [QuestionComponent, AnswerComponent, GameContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[QuestionComponent,AnswerComponent,GameContainerComponent]
})
export class GameModule { }

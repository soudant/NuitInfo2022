import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  questions!:any;
  currentQuestion!:any;
  currentAnswers!:string[];
  constructor(private questionService: QuestionServiceService) { }
  
  ngOnInit(): void {
    this.questions = this.questionService.questions;
    this.currentQuestion = this.getOneQuestion();
    console.log(this.currentQuestion);
  }

  getOneQuestion():any{
    return this.questionService.getNextQuestion();
  };
  getAnswers(key:string):string[]{
    return this.questionService.getAnswers(key);
  }

}

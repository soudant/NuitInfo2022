import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  currentQuestion!: Question;
  answered = false;
  end = false;
  result = "PERDU ... Dommage !";
  isMatPokoraSpeaking = false;

  constructor(private questionService: QuestionServiceService) { }
  
  ngOnInit(): void {
    this.onNextQuestion();
  }

  onSubmitAnswer(answer: string) {
    this.answered = true
    if (answer === this.currentQuestion.reponses[this.currentQuestion.bonneReponse]) {
      this.result = "GAGNER ! Bien joué !";
    } else {
      this.result = "PERDU ... Dommage !";
    }
  }

  onNextQuestion() {
    this.answered = false;

    if (this.questionService.getThereAreStillQuestion()) {
      this.currentQuestion = this.questionService.getNextQuestion();
      this.matSpeak();
    } else {
      this.end = true;
    }    
  }

  matSpeak() {
    this.isMatPokoraSpeaking = true;
    setTimeout(() => this.isMatPokoraSpeaking = false, 1500);
  }
}

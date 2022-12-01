import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  questions!:string[];
  constructor(private questionService: QuestionServiceService) { }

  ngOnInit(): void {
    this.questions = this.questionService.questions;
  }

}

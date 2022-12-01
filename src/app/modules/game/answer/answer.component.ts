import { Component, Input, OnInit } from '@angular/core';
import { QuestionServiceService } from 'src/app/services/question-service.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input()
  answer!:string;
  constructor(private questionService: QuestionServiceService) { }

  ngOnInit(): void {

  }

}

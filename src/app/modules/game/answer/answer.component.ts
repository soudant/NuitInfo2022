import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input() answer!: string;
  @Output() submitAnswer = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onClickAnswer() {
    this.submitAnswer.emit(this.answer);
  }

}

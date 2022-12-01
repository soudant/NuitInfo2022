import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  questions:string[] =[
    "What is the capital of France?",
    "What is the capital of Germany?",
    "What is the capital of Italy?",
    "What is the capital of Spain?",
    "What is the capital of Portugal?",
    "What is the capital of Greece?",
    "What is the capital of Poland?",
  ]

  constructor() { }
  getNextQuestion():string{
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  };
}

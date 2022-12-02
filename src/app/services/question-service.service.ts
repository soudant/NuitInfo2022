import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  questions: Question[] = [
    {
      enonce: 'Est ce que le VIH est mortel ?',
      reponses: [
            'Oui',
            'Non',
            'Peut être',
            'I dont know'
      ],
      bonneReponse : 1
    },
    {
      enonce: 'Est ce que le SIDA est mortel ?',
      reponses: [
            'Oui',
            'Non',
            'Peut être',
            'I dont know'
      ],
      bonneReponse : 2
    },
    {
      enonce: 'Est ce que le L’hépatite B est mortel ?',
      reponses: [
            'Oui',
            'Non',
            'Peut être',
            'I dont know'
      ],
      bonneReponse : 0
    },
    {
      enonce: 'Est ce que le VIH est mortel ?',
      reponses: [
            'Oui',
            'Non',
            'Peut être',
            'I dont know'
      ],
      bonneReponse: 3
    }
  ];

  constructor() { }

  getThereAreStillQuestion(): boolean {
    return this.questions.length != 0;
  }

  getNextQuestion(): Question {
    const question = this.questions.splice(Math.floor(Math.random() * this.questions.length), 1)[0];
    return question;
  }

}

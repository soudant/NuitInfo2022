import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  questions: any=[
    {enonce:"Est ce que le VIH est mortel ?",reponses:["Oui","Non","Peut être"]},
    {enonce:"Est ce que le SIDA est mortel ?",reponses:["romain N mot","bla","non","la reponse D"]},
    {enonce:"Sida transimissible ?",reponses:["oui","non","peut etre","la mer noire"]},
    {enonce:"Est que un échange de salive peut transmettre cette maladie",reponses:["oui","non","peut etre","la mer noire"]},
    {enonce:"Qu'est ce que TPE ? ",reponses:["oui","non","peut etre","la mer noire"]}
  ]

  constructor(
  ) { }
  getNextQuestion():any{
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  
  };
  getFirstQuestion():string{
    return this.questions["question1"];
    // return this.questions["question1"];
  };
  getAnswers(key:string):string[]{
    return this.questions[key].reponses;
  }




}

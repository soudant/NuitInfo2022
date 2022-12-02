import {Component, NgModule, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
imports: [
  BrowserModule,
  RouterModule.forRoot([
    {path: '/module/game', component: GameComponent},
  ])],
})

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Form Submitted');
  }
}

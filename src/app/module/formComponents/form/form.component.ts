import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MailInputComponent } from '../mail-input/mail-input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  firstName!: string;
  lastName!:string;
  constructor() {
    this.firstName='';
    this.lastName='';
  }

  ngOnInit(): void {
    
  }}
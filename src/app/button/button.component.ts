import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  label!: string;
  hasBeenClicked!:boolean;
  constructor() { }

  ngOnInit(): void {
    this.label = 'click me';
    this.hasBeenClicked = false;
  }


  changeName():void{
    this.hasBeenClicked?this.label = 'click me':this.label = 'clicked';
    this.hasBeenClicked = !this.hasBeenClicked;
  }
  }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  value: string;
  constructor() {
    this.value = '';
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
})
export class CaptchaComponent implements OnInit {
  captcha!: any;
  image!: any;
  randomNumber = 0;
  hideImage = true;

  constructor() {}

  ngOnInit(): void {
    this.captcha = document.getElementById('captchaimage');
    console.log(this.captcha);
    this.randomNumber = Math.floor(Math.random() * 100);

    //padding left
    this.captcha.style.paddingLeft = this.randomNumber + 'px';
  }
  imageSource(): void {
    console.log('clicked');
    this.hideImage = false;
  }
}

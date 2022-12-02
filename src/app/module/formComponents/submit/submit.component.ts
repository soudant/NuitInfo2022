import {Component, NgModule, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  async game() {
    await this.router.navigateByUrl("game")
  }
}

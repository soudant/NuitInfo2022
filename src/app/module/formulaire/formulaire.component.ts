import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulaireComponent} from "./module/formulaire/formulaire.component";

const routes: Routes = [
  {path: "", component:FormulaireComponent},
  //{path: "game", component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

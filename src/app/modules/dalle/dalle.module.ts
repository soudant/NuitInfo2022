import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DalleinputComponent } from './dalleinput/dalleinput.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DalleinputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DalleinputComponent
  ]
})
export class DalleModule { }

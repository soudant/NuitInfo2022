import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DalleinputComponent } from './dalleinput/dalleinput.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [DalleinputComponent, LoadingComponent],
  imports: [CommonModule, FormsModule, MatInputModule, MatProgressSpinnerModule],
  exports: [DalleinputComponent, LoadingComponent],
})
export class DalleModule {}

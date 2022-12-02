import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {  MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [MatIconModule],
    exports: [
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        HttpClientModule
    ],
})
export class MaterialModule {}
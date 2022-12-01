import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [MatIconModule],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatToolbarModule,
        MatMenuModule,
        HttpClientModule
    ],
})
export class MaterialModule {}
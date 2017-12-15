import { NgModule } from '@angular/core';

import { CommonModule } from '../common';
import { MenuComponent } from './menu';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MenuComponent
    ],
    exports: [
        CommonModule,
        MenuComponent
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        AngularCommonModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
    ],
    exports: [
        AngularCommonModule,
        HttpClientModule,
        RouterModule
    ]
})
export class CommonModule { }

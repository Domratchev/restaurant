import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '../common';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        PageNotFoundComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        PageNotFoundComponent
    ]
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() private readonly parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
            ]
        };
    }
}

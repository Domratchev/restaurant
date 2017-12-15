import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '../common/common.module';
import { MenuService } from './services';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class DataModule {
    constructor(
        @Optional() @SkipSelf() parentModule: DataModule
    ) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DataModule,
            providers: [
                MenuService
            ]
        };
    }
}

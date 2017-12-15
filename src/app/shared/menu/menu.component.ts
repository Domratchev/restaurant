import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Menu, MenuService } from '../../data';

@Component({
    selector: 'rst-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {
    @Input() public type?: string;

    public menu: Observable<Menu>;

    constructor(
        private readonly menuService: MenuService
    ) { }

    public ngOnChanges(changes: SimpleChanges): void {
        const typeChange = changes['type'];
        if (typeChange) {
            this.menu = this.menuService.GetMenu(this.type);
        }
    }
}

import { MenuItem } from './menu-item';

export interface MenuSection {
    name: string;
    description: string;
    items: Array<MenuItem>;
}

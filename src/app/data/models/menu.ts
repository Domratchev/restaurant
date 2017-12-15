import { MenuSection } from './menu-section';

export interface Menu {
    name: string;
    description: string;
    sections: Array<MenuSection>;
}

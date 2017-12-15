import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Menu } from '../models';

@Injectable()
export class MenuService {
    private readonly actionUrl: string;

    constructor(
        private readonly httpClient: HttpClient
    ) {
        this.actionUrl = `api/Menu`;
    }

    public GetMenu = (type: string): Observable<Menu> => {
        return this.httpClient.get(`${this.actionUrl}/${type}.json`)
            .map(response => response as Menu);
    }
}

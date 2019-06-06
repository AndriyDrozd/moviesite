import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { IFilm } from '../interfaces/tv-interface';

export const ADD_FILM_INFO = "[IFilm] ADD"

export class AddParamInfo implements Action {
    readonly type = ADD_FILM_INFO

    constructor(public payload: IFilm) {}
}

export type Actions = AddParamInfo
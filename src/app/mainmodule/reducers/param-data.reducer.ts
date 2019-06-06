import { Action } from '@ngrx/store';

import { IFilm } from '../interfaces/tv-interface';

import * as FilmDataActions from '../actions/film-data.actions';

const initialState: IFilm = {
    adult: undefined,
    backdrop_path: undefined,
    genre_ids: undefined,
    id: undefined,
    original_language: undefined,
    original_title: undefined,
    overview: undefined,
    popularity: undefined,
    poster_path: undefined,
    release_date: undefined,
    title: undefined,
    video: undefined,
    vote_average: undefined,
    vote_count: undefined
}

export function reducer(state: IFilm = initialState, action: FilmDataActions.Actions) {
    switch(action.type) {
        case FilmDataActions.ADD_FILM_INFO:
            return action.payload;
        default:
            return state;
    }
}
export class ITv {
    page: number;
    results: IFilm[] = [];
    total_pages: number;
    total_results: number;
}

export interface IFilm {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


export class IFilmDetails {
    adult: boolean;
    backdrop_path: string = '';
    belongs_to_collection: IFilmCollection;
    budget: number;
    genres: IFilmDetailGenres[] = [];
    homepage: string = '';
    id: number;
    imdb_id: string = '';
    original_language: string = '';
    original_title: string = '';
    overview: string = '';
    popularity: number;
    poster_path: string = '';
    production_companies: IFilmDetailProdactCompanies[] = [];
    production_countries: IFilmDetailProdactCountries[] = [];
    release_date: string = '';
    revenue: number;
    runtime: number;
    spoken_languages: IFilmDetailLanguages[] = [];
    status: string = '';
    tagline: string = '';
    video: boolean;
    vote_average: number;
    vote_count: number
}

export interface IFilmCollection {
    backdrop_path: string,
    id: number,
    name: string,
    poster_path: string
}

export interface IFilmDetailGenres {
    id: number,
    name: string
}

export interface IFilmDetailProdactCompanies {
    id: number,
    name: string,
    logo_path: string,
    origin_country: string
}

export interface IFilmDetailProdactCountries {
    iso_3166_1: string,
    name: string
}

export interface IFilmDetailLanguages {
    iso_639_1: string,
    name: string
}
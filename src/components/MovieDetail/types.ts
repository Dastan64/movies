import { Review } from "../../@types/Review";
import { Recommendation } from "../../@types/Recommendation";
import { Video } from "../../@types/Video";
import { Cast } from "../../@types/Cast";
import { Crew } from "../../@types/Crew";

export interface IMovieDetail {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: BelongsToCollection | null;
    budget?: number;
    credits?: {
        cast: Cast[];
        crew: Crew[];
    }
    genres?: Genre[];
    homepage?: string | null;
    id?: number;
    imdb_id?: string | null;
    original_language?: string;
    original_title?: string;
    overview?: string | null;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: string;
    revenue?: number;
    runtime?: number | null;
    spoken_languages?: SpokenLanguage[];
    videos?: {
        results: Video[],
    };
    status?: string;
    tagline?: string | null;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    reviews?: {
        page: number;
        total_pages: number;
        total_results: number;
        results: Review[];
    },
    recommendations?: {
        page: number;
        total_pages: number;
        total_results: number;
        results: Recommendation[],
    },

}

export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}




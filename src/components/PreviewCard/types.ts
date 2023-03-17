export interface IPreviewCard {
    adult?: boolean;
    backdrop_path?: string | null;
    id?: number;
    title?: string;
    original_language?: string;
    original_title?: string;
    overview: string;
    poster_path?: string | null;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface PreviewCardProps {
    preview: IPreviewCard,
}

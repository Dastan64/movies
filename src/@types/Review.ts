export interface Review {
    id: string;
    author: string;
    author_details: {
        name: string;
        username: string;
        avatar_path: string;
        rating: number;
    };
    content: string;
    created_at: Date;
    updated_at: Date;
    url: string;
    iso_639_1: string;
    media_id: number;
    media_title: string;
    media_type: string;
}

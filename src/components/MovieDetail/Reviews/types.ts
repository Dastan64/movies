import { Review } from "../../../@types/Review";

export interface ReviewsSectionProps {
    reviews: {
        page: number;
        total_pages: number;
        total_results: number;
        results: Review[];
    },
}

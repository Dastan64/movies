import { Recommendation } from "../../../@types/Recommendation";

export interface RecommendationsSectionProps {
    recommendations?: {
        page: number;
        total_pages: number;
        total_results: number;
        results: Recommendation[],
    },
}

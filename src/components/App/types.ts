import { PreviewCard } from "../PreviewCard/types";

export interface Data {
    page: number;
    results: PreviewCard[],
    total_pages: number;
    total_results: number;
}

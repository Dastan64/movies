import { Video } from "../../../@types/Video";

export interface VideosSectionProps {
    videos: {
        results: Video[],
    },
    onClick: (id: string) => void,
}

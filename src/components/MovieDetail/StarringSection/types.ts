import { Cast } from "../../../@types/Cast";
import { Crew } from "../../../@types/Crew";

export interface StarringSectionProps {
    credits: {
        cast: Cast[];
        crew: Crew[];
    }
}

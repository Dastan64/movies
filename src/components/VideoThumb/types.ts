import { Result } from "../MovieDetail/types";

export interface VideoThumbProps {
    info: Result,
    onClick: (id: string) => void;
}


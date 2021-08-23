import { Sport } from "@model/Sport";

export interface Team {
    id: string;
    name: string;
    ageLevel: string;
    sport: Sport;
}
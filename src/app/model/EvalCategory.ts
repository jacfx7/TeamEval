import { Sport } from "@model/Sport";
import { Team } from "./Team";

export interface EvalCategory {
    id: string;
    name: string;
    minValue: number;
    maxValue: number;
    sport: Sport;
    isChild: boolean;
    parentCategoryId: string;
    team: Team;
}
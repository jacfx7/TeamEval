import { Team } from "@model/Team";
import { User } from "@model/User";

export interface Evaluator {
    team: Team;
    user: User;
}
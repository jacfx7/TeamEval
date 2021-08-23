import { Position } from '@model/Position';
import { Team } from '@model/Team';

export interface Player {
    id: string;
    name: string;
    position: Position;
    number: number;
    team: Team;
}
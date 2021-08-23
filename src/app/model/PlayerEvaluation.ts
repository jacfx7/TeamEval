import { EvalCategory } from "@model/EvalCategory";
import { Evaluator } from "@model/Evaluator";
import { Player } from "@model/Player";

export interface PlayerEvaluation {
    player: Player;
    evaluator: Evaluator;
    category: EvalCategory;
    score: number;
}
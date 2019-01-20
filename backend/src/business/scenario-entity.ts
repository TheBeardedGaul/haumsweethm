import { Trigger } from "./trigger-entity";
import { PrimaryColumn, ManyToOne } from "typeorm";
import { Action } from "./action-entity";

export class Scenario {
    @PrimaryColumn()
    id : string;
    
    @ManyToOne(type => Action)
    actionList : Action[];
}
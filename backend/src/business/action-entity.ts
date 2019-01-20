import { Entity, PrimaryColumn, ManyToOne, OneToOne, Column } from "typeorm";
import { Trigger } from "./trigger-entity";
@Entity()
export class Action {
    @PrimaryColumn()
    id : string;

    @OneToOne(type => Trigger)
    private trigger : Trigger;

    @Column()
    private color : string;

    @Column()
    private music : string;
    
    @Column()
    private activeTime : number;
}
import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Group } from "./group-entity";

@Entity()
export class Laumio {
    @PrimaryColumn()
    id: string;

    @ManyToOne(type => Group, group => group.laumioList)
    group: Group;
}
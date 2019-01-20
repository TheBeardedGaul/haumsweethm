import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import { Laumio } from "./Laumio";

@Entity()
export class Group {
    @PrimaryColumn()
    id : string;
    // laumioList : Laumio[] = [];

    // public addLaumio(laumio: Laumio): Promise<boolean> {
    //     this.laumioList.push(laumio);
    //     console.log(`Laumio ${laumio.id}`)
    //     return Promise.resolve(true);
    // }
}
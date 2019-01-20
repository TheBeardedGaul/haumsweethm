import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from "typeorm";
import { Laumio } from "./laumio-entity";

@Entity()
export class Group {
    @PrimaryColumn()
    id : string;

    @OneToMany(type => Laumio, laumio => laumio.group)
    laumioList : Laumio[];

    // public addLaumio(laumio: Laumio): Promise<boolean> {
    //     this.laumioList.push(laumio);
    //     console.log(`Laumio ${laumio.id}`)
    //     return Promise.resolve(true);
    // }
}
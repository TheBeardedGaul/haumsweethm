import { PrimaryColumn } from "typeorm";

export class Trigger {
    @PrimaryColumn()
    id : string;
}
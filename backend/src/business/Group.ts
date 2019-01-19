import { Laumio } from "./Laumio";

export class Group {
    private _id : string;
    private _laumioList : Laumio[];

    constructor(id: string) {
        this._id = id;
    }

    get id(): string {
        return this._id;
    }

    get laumioList(): Laumio[] {
        return this._laumioList;
    } 

    public addLaumio(laumio: Laumio): Promise<boolean> {
        this._laumioList.push(laumio);
        console.log(`Laumio ${laumio.id}`)
        return Promise.resolve(true);
    }
}
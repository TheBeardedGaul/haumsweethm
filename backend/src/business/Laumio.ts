import { Group } from "./Group";

export class Laumio {
    private _id : string;
    private _group : Group;

    get id(): string {
        return this._id;
    }

    get group(): Group {
        return this._group;
    }
}
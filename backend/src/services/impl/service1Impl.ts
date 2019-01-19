import { Service1 } from "../interfaces/service1";

export class Service1Impl implements Service1 {
    constructor() {

    }

    exec() {
        return {
            title: "API Examples",
            project: "haumsweetohm-api",
            service: "service1"
        };
    }
}
import { Service2 } from "../interfaces/service2";

export class Service2Impl implements Service2 {
    constructor() {

    }

    exec() {
        return {
            title: "API Examples",
            project: "haumsweetohm-api",
            service: "service2"
          };
    }
}
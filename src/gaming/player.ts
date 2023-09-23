import { generateRandomName } from "./names";

export class Player {
    peerId: string | null = null;
    name: string;

    constructor(name: string) {
        if (name === "") {
            this.name = generateRandomName();
        } else {
            this.name = name;
        }
    }
}
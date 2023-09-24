import { generateRandomName } from "./names";

export class Player {
    peerId: string | null = null;
    isHost: boolean = false;
    name: string;

    constructor(name: string) {
        if (name === "") {
            this.name = generateRandomName();
        } else {
            this.name = name;
        }
    }
}
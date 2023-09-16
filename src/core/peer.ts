import { Player } from "../gaming/player";

export interface Peer {
    player: Player;
    allPlayers: Player[];

    onNewPlayer(callback: (player: Player) => void): void;
    onPlayerLeft(callback: (player: Player) => void): void;

    init(): Promise<void>;
    getRoomId(): string;
}
import { Player } from "./player";

export interface Peer {
    player: Player;
    allPlayers: Player[];

    onNewPlayer(callback: (player: Player) => void): void;
    onPlayerLeft(callback: (player: Player) => void): void;
    onPuzzleModeChanged(callback: (mode: string) => void): void;

    init(): Promise<void>;
    getRoomId(): string;
    changePuzzleMode(mode: string): void;
}
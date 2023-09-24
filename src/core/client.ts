import { Peer } from 'peerjs';
import type { DataConnection } from 'peerjs';

import type { Peer as PeerInterface } from './peer';
import { Player } from "./player";

export class Client implements PeerInterface {
    player: Player;
    allPlayers: Player[] = [];

    private peer: Peer;
    private connection: DataConnection | null = null;
    private initPromise: Promise<void>;
    private roomId: string;

    private newPlayerCallback: ((player: Player) => void) | null = null;
    private playerLeftCallback: ((player: Player) => void) | null = null;
    private puzzleModeChangedCallback: ((mode: string) => void) | null = null;

    onNewPlayer(callback: (player: Player) => void) {
        this.newPlayerCallback = callback;
    }

    onPlayerLeft(callback: (player: Player) => void) {
        this.playerLeftCallback = callback;
    }

    onPuzzleModeChanged(callback: (mode: string) => void) {
        this.puzzleModeChangedCallback = callback;
    }

    constructor(roomId: string, player: Player) {
        this.player = player;
        this.allPlayers.push(player);
        this.roomId = roomId;

        this.peer = new Peer({ debug: 2 });

        this.initPromise = new Promise((resolve, reject) => {
            this.peer.on("open", () => {
                this.player.peerId = this.peer.id;
                console.log("peer:open> " + this.peer.id);

                this.connection = this.peer.connect(roomId, { reliable: true });

                this.connection.on("open", () => {
                    console.log("connection:open> " + this.connection!.peer);
                    this.connection!.send({
                        type: "newPlayers",
                        players: [this.player]
                    });

                    resolve();
                });

                this.connection.on("data", (data) => {
                    this.handleMessage(data);
                    console.log("connection:data> " + data);
                });

                this.connection.on("close", () => {
                    console.log("connection:close");
                    reject();
                });

                this.connection.on("error", (error) => {
                    console.error("connection:error> " + error);
                    reject();
                });
            });

            this.peer.on("disconnected", () => {
                console.error("peer:disconnected");
                reject();
            });

            this.peer.on("close", () => {
                console.error("peer:close");
                reject();
            });

            this.peer.on("error", (error) => {
                console.error("peer:error> " + error);
                reject();
            });
        });
    }

    public send(data: any) {
        if (!this.connection) {
            throw new Error("Connection not established");
        }

        this.connection.send(data);
    }

    public async init() {
        await this.initPromise;
    }

    public getRoomId() {
        return this.roomId;
    }

    public changePuzzleMode(mode: string): void {
        throw new Error("Clients cannot change puzzle mode");
    }

    private handleMessage(data: any) {
        if (data.type === "newPlayers") {
            data.players.forEach((player: Player) => {
                this.allPlayers.push(player);
                this.newPlayerCallback?.(player);
            });
        } else if (data.type === "puzzleModeChanged") {
            this.puzzleModeChangedCallback?.(data.mode);
        }
    }
}
import { Peer } from 'peerjs';
import type { DataConnection } from 'peerjs';

import type { Peer as PeerInterface } from './peer';
import { Player } from "../gaming/player";

export class Host implements PeerInterface {
    player: Player;
    allPlayers: Player[] = [];

    private peer: Peer;
    private connections: Set<DataConnection> = new Set();
    private initPromise: Promise<void>;

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

    constructor(player: Player) {
        this.player = player;
        this.player.isHost = true;
        this.allPlayers.push(player);

        this.peer = new Peer({ debug: 2 });

        this.initPromise = new Promise((resolve, reject) => {
            this.peer.on("open", (id) => {
                this.player.peerId = this.peer.id;
                console.log("peer:open> " + this.peer.id);
                resolve();
            });

            this.peer.on("connection", (connection) => {
                console.log("peer:connection> " + connection.peer);

                this.connections.add(connection);

                connection.on("open", () => {
                    connection.send({
                        type: "newPlayers",
                        players: this.allPlayers
                    });
                });

                connection.on("data", (data) => {
                    console.log("connection:data> " + data);
                    this.handleMessage(data);
                    this.connections.forEach((otherConnection) => {
                        if (otherConnection !== connection) {
                            otherConnection.send(data);
                        }
                    });
                });

                connection.on("close", () => {
                    console.log("connection:close");
                    this.connections.delete(connection);
                    reject();
                });

                connection.on("error", (error) => {
                    console.error("connection:error> " + error);
                    this.connections.delete(connection);
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
        this.connections.forEach((connection) => {
            connection.send(data);
        });
    }

    public async init() {
        await this.initPromise;
    }

    public getRoomId() {
        return this.peer.id;
    }

    public changePuzzleMode(mode: string): void {
        this.send({
            type: "puzzleModeChanged",
            mode: mode
        });
        this.puzzleModeChangedCallback?.(mode);
    }

    private handleMessage(data: any) {
        if (data.type === "newPlayers") {
            data.players.forEach((player: Player) => {
                this.allPlayers.push(player);
                this.newPlayerCallback?.(player);
            });
        } else if (data.type === "puzzleModeChanged") {
            throw new Error("Clients cannot change puzzle mode");
        }
    }
}

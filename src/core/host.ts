import { Peer } from 'peerjs';
import type { DataConnection } from 'peerjs';

/**
 * The Host class is responsible for managing the connection to the host.
 * It creates a receiver Peer and offers events to listen to for when a client
 * connects, sends data and disconnects.
 */
export class Host {
    private peer: Peer;
    private connection: DataConnection | null = null;
    private onConnect: (data: string) => void;
    private onData: (data: string) => void;
    private onDisconnect: () => void;

    constructor(
        onConnect: (data: string) => void,
        onData: (data: string) => void,
        onDisconnect: () => void,
    ) {
        this.onConnect = onConnect;
        this.onData = onData;
        this.onDisconnect = onDisconnect;

        this.peer = new Peer({ debug: 2 });

        this.peer.on("open", function (id) {
            console.log("Hosting ID is: " + id);
            console.log("Awaiting connection...");
        });

        this.peer.on("connection", (connection) => {
            console.log("Connection established!");
            this.connection = connection;
            /*this.connection.on("data", this.onData);
            this.connection.on("close", () => {
                console.log("Connection closed!");
                this.onDisconnect();
            });
            this.onConnect(connection.peer);*/
        });

        this.peer.on("disconnected", () => {
            console.log("Disconnected!");
        });

        this.peer.on("close", () => {
            console.log("Connection closed!");
        });

        this.peer.on("error", (err) => {
            console.log(err);
        });
    }
}

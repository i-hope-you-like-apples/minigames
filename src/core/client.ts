import { Peer } from 'peerjs';
import type { DataConnection } from 'peerjs';

/**
 * The Client class is responsible for managing the connection to the host.
 * It creates a sender Peer and offers events to listen to for when it successfully
 * connects, sends data and disconnects.
 */
export class Client {
    private peer: Peer;
    private connection: DataConnection | null = null;
    private onConnect: (data: string) => void;
    private onData: (data: string) => void;
    private onDisconnect: () => void;

    constructor(
        hostId: string,
        onConnect: (data: string) => void,
        onData: (data: string) => void,
        onDisconnect: () => void,
    ) {
        this.onConnect = onConnect;
        this.onData = onData;
        this.onDisconnect = onDisconnect;

        this.peer = new Peer({ debug: 2 });

        this.peer.on("open", function (id) {
            console.log("Opened ID is: " + id);
        });

        this.peer.on('connection', function (connection) {
            connection.on('open', function () {
                connection.send("Sender does not accept incoming connections");
                setTimeout(function () { connection.close(); }, 500);
            });
        });

        this.peer.on('disconnected', function () {
            console.log('Connection lost. Please reconnect');
        });

        this.peer.on('close', function () {
            console.log('Connection destroyed');
        });

        this.peer.on('error', function (err) {
            console.log(err);
        });

        let connection = this.peer.connect(hostId, { reliable: true });

        connection.on('open', function () {
            console.log("Connected to: " + connection.peer);
        });

        connection.on('data', function (data) {
            console.log("Data received:" + data);
        });

        connection.on('close', function () {
            console.log("Connection closed");
        });
    }
}
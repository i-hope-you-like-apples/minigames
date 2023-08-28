<script lang="ts">
  import Peer from "peerjs";

  let peerId = "";

  function handleHost() {
    let peer = new Peer();
    peer.on("open", function (id) {
      console.log("My peer ID is: " + id);
    });
    peer.on("connection", function (conn) {
      conn.on("data", function (data) {
        // Will print 'hi!'
        console.log(data);
        conn.send("Hello back!");
      });
    });
  }

  function handleJoin() {
    let peer = new Peer();
    console.log(peerId);
    let conn = peer.connect(peerId);
    conn.on("open", function () {
      conn.on("data", function (data) {
        console.log("Received", data);
      });
      conn.send("hi!");
    });
  }
</script>

<main class="container">
  <h1 style="margin-top: 55px;">Hello, I hope you like apples</h1>

  <p>Here are some minigames for you!</p>

  <button on:click={handleHost}>Click to host a game</button>

  <input bind:value={peerId} type="text" placeholder="Enter a game peer ID" />

  <button on:click={handleJoin}>Click to join a game</button>
</main>

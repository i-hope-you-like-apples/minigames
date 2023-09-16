<script lang="ts">
    import type { Host } from "./core/host";
    import type { Client } from "./core/client";
    import { onMount } from "svelte";

    export let peer: Host | Client;

    let allPlayers = peer.allPlayers;
    let copyButtonText = "Copy";

    peer.onNewPlayer((player) => {
        allPlayers = peer.allPlayers;
    });

    onMount(() => {
        let baseURI = location.protocol + "//" + location.host;
        let roomLink = document.getElementById("roomLink") as HTMLInputElement;
        roomLink.value = baseURI + "/minigames/?" + peer.getRoomId();
    });

    function copyRoomLinkToClipboard() {
        let roomLink = document.getElementById("roomLink") as HTMLInputElement;
        navigator.clipboard.writeText(roomLink.value);

        copyButtonText = "Copied!";
        setTimeout(() => {
            copyButtonText = "Copy";
        }, 2000);
    }
</script>

<article>
    <h1>Minigame</h1>
    <h2>List of players</h2>
    <ul>
        {#each allPlayers as player}
            <li>{player.name} - {player.peerId}</li>
        {/each}
    </ul>
    <h2>Link</h2>
    <label>
        <input type="text" id="roomLink" readonly />
        <button on:click={copyRoomLinkToClipboard}>{copyButtonText}</button>
    </label>
</article>

<script lang="ts">
    import type { Host } from "../../core/host";
    import type { Client } from "../../core/client";

    export let peer: Host | Client;
</script>

<h2>Selector</h2>

<p>Coucou</p>

{#if peer.player.isHost}
    <button
        on:click={() => {
            peer.changePuzzleMode("game");
        }}>Start game</button
    >
{/if}

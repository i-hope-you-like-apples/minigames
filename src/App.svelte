<script lang="ts">
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import PuzzleWrapper from "./PuzzleWrapper.svelte";

  import { Host } from "./core/host";
  import { Client } from "./core/client";
  import { Player } from "./core/player";

  let host: Host | null = null;
  let client: Client | null = null;

  function getRoomIdentifier() {
    let queryString = window.location.search.substring(1);
    let uuidRegex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    return uuidRegex.test(queryString) ? queryString : null;
  }

  let roomIdentifier = getRoomIdentifier();

  let name = "";

  async function createRoom() {
    let uninitializedHost = new Host(new Player(name));
    await uninitializedHost.init();
    host = uninitializedHost;
  }

  async function joinRoom() {
    window.history.replaceState({}, document.title, "/minigames/");

    let uninitializedClient = new Client(roomIdentifier!, new Player(name));
    await uninitializedClient.init();
    client = uninitializedClient;
  }
</script>

<Header />

<main class="container">
  {#if host}
    <PuzzleWrapper peer={host} />
  {:else if client}
    <PuzzleWrapper peer={client} />
  {:else}
    <article class="grid">
      <div>
        <h1>Welcome!</h1>
        <form>
          <input
            type="text"
            placeholder="Your name"
            aria-label="Your name"
            autocomplete="off"
            bind:value={name}
          />
          {#if roomIdentifier}
            <button type="submit" on:click|preventDefault={joinRoom}
              >Join room!</button
            >
          {:else}
            <button type="submit" on:click|preventDefault={createRoom}
              >Create a private room!</button
            >
          {/if}
        </form>
      </div>
      <div />
    </article>
  {/if}
</main>

<Footer />

<style>
  main {
    margin-top: 64px;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  article {
    padding: 0;
    overflow: hidden;
  }

  article div {
    padding: 1rem;
  }

  article div:nth-of-type(2) {
    display: none;
    background-color: #374956;
    background-image: url("/minigames/assets/ihopeyoulikeapples.jpg");
    background-position: bottom;
    background-size: cover;
  }

  @media (min-width: 992px) {
    .grid > div:nth-of-type(2) {
      display: block;
    }
  }
</style>

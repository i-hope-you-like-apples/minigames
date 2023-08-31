<script lang="ts">
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { Host } from "./core/host";
  import { Client } from "./core/client";

  let name = "";

  function createRoom() {
    let host = new Host(
      (data) => {},
      (data) => {},
      () => {}
    );
  }

  function joinRoom() {
    let client = new Client(
      name,
      (data) => {},
      (data) => {},
      () => {}
    );
  }
</script>

<Header />

<main class="container">
  <article class="grid">
    <div>
      <h1>Welcome!</h1>
      <form>
        <input
          type="text"
          name="nickname"
          placeholder="Your nickname"
          aria-label="Your nickname"
          autocomplete="nickname"
          bind:value={name}
        />
        <button type="submit" on:click|preventDefault={joinRoom}>Play!</button>
        <button
          type="submit"
          class="contrast"
          on:click|preventDefault={createRoom}>Create a private room</button
        >
      </form>
    </div>
    <div />
  </article>
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

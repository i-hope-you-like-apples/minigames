<script lang="ts">
    import { onMount } from "svelte";

    let scheme = "auto";

    onMount(() => {
        if (typeof window.localStorage !== "undefined") {
            let newScheme = window.localStorage.getItem("preferredColorScheme");
            if (newScheme !== null) {
                scheme = newScheme;
                applyScheme();
            }
        }
    });

    function applyScheme() {
        let finalScheme = scheme;
        if (finalScheme === "auto") {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                finalScheme = "dark";
            } else {
                finalScheme = "light";
            }
        }
        document.querySelector("html")?.setAttribute("data-theme", finalScheme);
    }

    function switchTheme(newScheme: string) {
        scheme = newScheme;
        applyScheme();
        if (typeof window.localStorage !== "undefined") {
            window.localStorage.setItem("preferredColorScheme", scheme);
        }
    }
</script>

<nav class="container-fluid">
    <ul>
        <li>
            <a href="./" class="contrast" on:click|preventDefault={() => {}}
                ><strong
                    >Multiplayer Puzzle Collection by <i>IHopeYouLikeApples</i
                    ></strong
                ></a
            >
        </li>
    </ul>
    <ul>
        <li>
            <details role="list" dir="rtl">
                <summary aria-haspopup="listbox" role="link" class="secondary"
                    >Theme</summary
                >
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <ul role="listbox">
                    <li>
                        <a on:click={() => switchTheme("auto")}>Auto</a>
                    </li>
                    <li>
                        <a on:click={() => switchTheme("light")}>Light</a>
                    </li>
                    <li>
                        <a on:click={() => switchTheme("dark")}>Dark</a>
                    </li>
                </ul>
            </details>
        </li>
    </ul>
</nav>

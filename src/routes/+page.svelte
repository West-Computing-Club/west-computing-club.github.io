<script lang="ts">
    import Navbar from "./navbar.svelte";
    import FadeInBox from "$lib/FadeInBox.svelte";
    import {first_content, second_content} from "$lib/data";   

    import TitleBlock from "./TitleBlock.svelte";
    import AboutBlock from "./AboutBlock.svelte";
</script>

<Navbar />
<TitleBlock />
<div class="w-full bg-black p-16">
    <div class="lg:w-96">
        {#each first_content as content}
            <FadeInBox id={content.id} tailwind="my-32 text-white transition-all">
                <h2 class="text-2xl">{content["card_head"]}</h2>
                <p class="text-lg text-gray-300">{content["text"]}</p>
            </FadeInBox>
        {/each}
    </div>
</div>
<div class="w-full bg-black p-16">
    <div class="lg:w-96 ml-auto">
        {#each second_content as content}
            <FadeInBox id={content.id} tailwind="my-32 text-white transition-all">
                <h2 class="text-2xl">{content["card_head"]}</h2>
                <p class="text-lg text-gray-300">{content["text"]}</p>
            </FadeInBox>
        {/each}
    </div>
</div>
<AboutBlock />


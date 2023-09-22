<script lang="ts">
    import {third_content} from "$lib/data";
    import FadeInBox from "$lib/FadeInBox.svelte";
</script>

<div class="w-full bg-black p-16">
    <FadeInBox id={8} tailwind="my-8">
        <h1 class="text-2xl text-white">Meetings and Club Information</h1>
    </FadeInBox>
    <FadeInBox id={9}>
        <div class="flex flex-col lg:flex-row" tailwind="text-white">
            {#each third_content as content}
                <div class="text-white lg:w-64 mx-8">
                    <h1 class="text-xl">{content["head"]}</h1>
                    <p>{content["content"]}</p>
                </div>
            {/each}
        </div>
    </FadeInBox>
</div>
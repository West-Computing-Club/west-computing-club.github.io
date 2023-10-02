<script lang="ts">
    import FadeInBox from "$lib/FadeInBox.svelte";
    import {first_content, second_content, third_content} from "$lib/data";   

    import TypingEffect from "$lib/TypingEffect.svelte";
</script>

<!-- Front Home Page -->
<div class="w-full h-screen flex items-center justify-center bg-black p-4">
    <div class="text-white text-center md:text-left">
        <h1 class="text-2xl">WC3: Learn, Practice, Build</h1>
        <TypingEffect
            tailwind="text-lg text-gray-300"
            style=""
            text="A club at West High School dedicated to providing learning pathways of CS for students."
            textAnim="animate-breath"
            textdelay={150}
            />
    </div>
</div>

<!-- Scrolling details -->
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

<!-- Meeting and Club Information Chunk -->
<div class="w-full bg-black p-16">
    <FadeInBox id={7} tailwind="my-8">
        <h1 class="text-2xl text-white">Meetings and Club Information</h1>
    </FadeInBox>
        <div class="flex flex-col lg:flex-row" tailwind="text-white">
            {#each third_content as content}
                <FadeInBox id={content["id"]} delay={content["delay"]}>
                    <div class="text-white lg:w-64 mx-8">
                        <h1 class="text-xl">{content["head"]}</h1>
                        <p>{content["content"]}</p>

                        {#if content["link"] != null}
                            <img src="/link.svg" class="inline w-4 h-4" alt="link-icon"/>
                            <a href={content["link"]} class="text-sm text-blue-400">{content["link"]}</a>
                        {/if}
                    </div>
                </FadeInBox>
            {/each}
        </div>
</div>


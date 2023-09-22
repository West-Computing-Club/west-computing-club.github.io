<script lang="ts">
    import Navbar from "./navbar.svelte";
    import TypingEffect from "$lib/TypingEffect.svelte";
    import FadeInBox from "$lib/FadeInBox.svelte";
    import {first_content, second_content} from "$lib/data";   

    import TitleBlock from "./TitleBlock.svelte";
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
<div class="w-full bg-black p-16">
    <FadeInBox id={8} tailwind="my-8">
        <h1 class="text-2xl text-white">Meetings and Club Information</h1>
    </FadeInBox>
    <FadeInBox id={9}>
        <div class="flex flex-col lg:flex-row" tailwind="text-white">
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">Dates and Times</h1>
                <p>We meet at 4:00 PM on Fridays in West High. The start date will be decided soon. To find out more information such as room numbers, sign up for the club using this URL! Form Link Here.</p>
            </div>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">Registration</h1>
                <p>Registration for the club is that simple google form questionare. Note that we do require all members to be in the Iowa City School District.</p>
            </div>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">Recommendations</h1>
                <p>The club has a hard prerequisite of a passion in Computer Science. In addition, it is recommended that members either have the knowledge of AP Computer Science A or equivalent, to joining this club.</p>
            </div>
        </div>
    </FadeInBox>
</div>

<script lang="ts">
    import TypingEffect from "$lib/TypingEffect.svelte";
</script>

<div class="w-full h-screen flex items-center justify-center bg-black p-4">
    <div class="text-white text-center md:text-left">
        <h1 class="text-2xl">WC3: Learn, Practice, Build</h1>
        <TypingEffect
            tailwind="text-lg text-gray-300"
            style=""
            text="An club at West High School dedicated to providing learning pathways of CS for students."
            textAnim="animate-breath"
            textdelay={150}
            />
    </div>
</div>
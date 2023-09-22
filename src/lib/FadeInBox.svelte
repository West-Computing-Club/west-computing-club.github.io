<script lang="ts">
    import { onMount } from 'svelte';

    export let id: number;
    export let tailwind = "";

    let inView = false;

        
    // Callback function for the Intersection Observer
    const handleIntersection = (entries: any) => {
        entries.forEach((entry : any) => {
        if (entry.isIntersecting) {
            // The div is in the viewport
            inView = true;
        } else {
            // The div is not in the viewport
            inView = false;
        }
        });
    };

    onMount(() => {
        let targetDiv = document.querySelector('#card'+id);
        // Initialize the Intersection Observer
        const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 1.0, // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        // Start observing the target div
        observer.observe(targetDiv!);
    });

</script>
<div class = {tailwind + (inView ? " animate-fade-in-fast" : " opacity-0")} id={"card"+id}>
    <slot />
</div>
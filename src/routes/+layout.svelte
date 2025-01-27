<script lang="ts">
    import "../app.css"
    import Navbar from '../lib/Navbar.svelte';
    import Footer from "../lib/Footer.svelte";

</script>

<svelte:head>
    <title>WC3</title>
    <meta name="description" content="West Computing Club, an organization at West High empowering aspringing Computer Science students.">
</svelte:head>
<div class="w-screen h-screen -z-10 fixed bg-[url(https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg)] bg-cover"/>

<Navbar />
<slot />
<Footer />

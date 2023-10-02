<script lang="ts">
    import "../app.css"
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
</script>

<svelte:head>
    <title>WC3</title>
    <meta name="description" content="West Computing Club, an organization at West High empowering aspringing Computer Science students.">
</svelte:head>

<Navbar />
<slot />
<Footer />

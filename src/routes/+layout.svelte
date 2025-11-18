<script lang="ts">
	import '../app.css';
	
	import Navbar from '../components/navbar/navbar.svelte';
	import Footer from '../components/footer/footer.svelte';
	import Loader from '../components/loader.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
	<title>ronish rohan</title>
</svelte:head>

<Navbar />
<Loader />

<div class="max-w-[900px] w-full mx-auto">
	{@render children?.()}
</div>

<Footer />
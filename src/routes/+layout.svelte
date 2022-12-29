<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	onMount(() => {
		console.log('layout onMount called');
	});

	
</script>

<svelte:head>
	<title>this is title</title>
</svelte:head>

<ul class="inline-flex">
	<li class="p-4 " class:bg-red-900={$page.url.pathname === '/'}><a href="/">home</a></li>
	<li class="p-4" class:bg-red-900={$page.url.pathname === '/products'}>
		<a sveltekit: href="/products">products</a>
	</li>
</ul>

<slot />

<footer>this is footer</footer>

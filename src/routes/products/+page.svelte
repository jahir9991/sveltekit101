

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { productService } from '$src/services/productService';
	import ProductCard from '$src/components/ProductCard.svelte';
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import { page } from '$app/stores';
	import type { Subscriber, Unsubscriber } from 'svelte/store';

	let products: any;
	let psub: Unsubscriber;

	onMount(async () => {
		console.log('products  onMount called');
		loadData();
	});
	onDestroy(() => {
		console.log('products   onDestroy called');
		if (psub) psub();
	});

	const loadData = async () => {
		products = await productService.getAll();
		psub = page.subscribe((dd) => {
			console.log(dd.url);
		});
	};

	const onDeleteProduct = (price: any) => {
		products = products.filter((element: any) => element.id != price);
	};
</script>

<h1>this us about</h1>
<div class="container mx-auto grid grid-cols-8 gap-2">
	{#if products}
		{#each products as p, i (p)}
			<div
				animate:flip={{ duration: 300 }}
				out:scale={{ duration: 250 }}
				in:scale={{ duration: 250 }}
			>
				<ProductCard product={{ name: p.title, price: p.id }} {onDeleteProduct} />
			</div>
		{/each}
	{:else}
		<div class="w-full text-center">loading...</div>
	{/if}
</div>

<style>
</style>

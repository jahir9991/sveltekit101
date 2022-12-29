<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { productService } from '$src/services/productService';
	import ProductCard from '$src/components/ProductCard.svelte';
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let data:any;
	

	onMount(async () => {
		console.log('products  onMount called');
		console.log(data);
		
	});
	onDestroy(async () => {
		console.log('products   onDestroy called');
		
	});

	

	const onDeleteProduct = (price: any) => {
		// products = products.filter((element: any) => element.id != price);
	};
</script>


<div class="container mx-auto grid grid-cols-8 gap-2">
	{#if data.products}
		{#each data.products as p, i (p)}
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

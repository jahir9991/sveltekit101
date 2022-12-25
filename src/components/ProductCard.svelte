<script lang="ts">
	import type { Product } from '$src/entities/Product.entity';

	export let product: Product;

	export let onDeleteProduct: any;
</script>

<div class="productCard ">
	<h1>{product.name}</h1>
	<h4>{product.price}tk</h4>
	<button on:click={onDeleteProduct(product.price)}> X </button>
</div>

<style type="sass">
	.productCard {
		@apply bg-slate-300 text-left rounded-md;
		
	}
</style>

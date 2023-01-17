<script lang="ts">
	import { browser } from "$app/environment";
	import SeoHeader from "$src/presentation/components/SeoHeader.svelte";
	import ProductPage from "$src/presentation/pages/ProductPage.svelte";
    export let data:any;

 
	

</script>

<SeoHeader title={"buy now "+data?.product?.payload?.name} ></SeoHeader>

<section>

	{#if data.product }

	
	<ProductPage  productData={data?.product?.payload} />
		


		
		 
	{:else}

	no data found
		
	{/if}


</section>


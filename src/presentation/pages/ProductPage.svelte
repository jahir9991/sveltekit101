<script>
	import { ENV } from "$src/environment";
	import ExtendedImage from "../common/ExtendedImage.svelte";
	import ProductInfo from "./components/ProductInfo.svelte";


    export let productData;

    let  selectedImage=productData?.productImages[0];

    const changeImg=(img)=>{
        selectedImage=img
    }
</script>


<div class="grid grid-cols-2 ">
    <div class="grid grid-cols-10">
        <div class=" col-span-2 ">
            <div >

            {#each productData?.productImages as img}
            
                <button class=" overflow-hidden rounded-lg m-2" on:click={()=>changeImg(img)}>

                        <ExtendedImage
                        classes={` `}
                        width={250}
                        height={165}
                        src={img?.url + ENV.IMG_VAR_185x290}
                        alt={''}
                            />
                </button>

            {/each}

        </div>

        </div>
        <div class=" col-span-8 ">
            <div class="   m-4 overflow-hidden rounded-lg ">
                <ExtendedImage
                classes={``}
                width={600}
                height={500}
                src={selectedImage?.url }
                alt={''}
                    />
            </div>
        </div>

    </div>
    <div class="">
        <ProductInfo product={productData}></ProductInfo>
    </div>

</div>





<style lang="postcss">
    .product-image{
        @apply overflow-hidden rounded-lg ;
    }
    
    
</style>
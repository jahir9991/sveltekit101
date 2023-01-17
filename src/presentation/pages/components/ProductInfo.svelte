<script>
    export let product;
</script>

<div class="grid grid-cols-9">
    <div class="col-span-5">
        <h1 class="title">{product.displayName}</h1>
    </div>
    <div class="col-span-4">
        feedback
    </div>


</div>
<style>
    .title{
        @apply text-4xl  font-bold  ;
       
    }
</style>
 
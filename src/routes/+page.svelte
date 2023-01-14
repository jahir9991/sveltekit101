<script lang="ts">
	let data: any = [10];

	const changeData = () => {
		data = [...data, 50];
	};
</script>

<svelte:head>
	<title>this is home</title>
</svelte:head>


<h1 class="text-red-200">this is home</h1>

<button on:click={changeData}> change </button>

<div>
	{JSON.stringify(data)}
</div>

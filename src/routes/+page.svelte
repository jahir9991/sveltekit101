<script lang="ts">
	let data: any = [10];

	const changeData = () => {
		data = [...data, 50];
	};
</script>

<h1 class="text-red-200">this is home</h1>

<button on:click={changeData}> change </button>

<div>
	{JSON.stringify(data)}
</div>

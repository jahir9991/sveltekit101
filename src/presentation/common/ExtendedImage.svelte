<script lang="ts">
	import { ENV } from '$src/environment';
	import LogoLoader from './LogoLoader.svelte';
	export let src = '';
	export let height;
	export let width;
	export let loading = 'lazy';
	export let alt = 'loox.com.bd';
	export let classes = '';
	interface ISet {
		media?: '(min-width:1024px)' | '(min-width:300px)';
		src?: string;
	}
	export let srcSet: ISet[] = [];
	const rep = (src) => {
		if (!ENV.IMAGE_ORIGIN_ENDPOINT) return src;
		return src?.length ? src?.replace('imagedelivery.net', ENV.IMAGE_ORIGIN_ENDPOINT) : src;
	};
</script>

<div class="block  relative w-full h-full">
	<span class="absolute h-full w-full flex items-center justify-center">
		<LogoLoader />
	</span>
	<picture class="relative">
		{#each srcSet as item}
			<source media={item.media} srcset={rep(item?.src || '')} />
		{/each}
		<img class={classes} {width} {height} src={`${rep(src)}`} {alt} {loading} />
	</picture>
</div>

<style lang="postcss">
	img {
		object-fit: cover;
		overflow: hidden;
	}
</style>

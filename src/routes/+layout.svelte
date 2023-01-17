<script lang="ts">
	 import "@fontsource/quicksand/400.css";
  import "@fontsource/quicksand/700.css";
	import '../app.css';

	import { page } from '$app/stores';
		
</script>

	<ul class="inline-flex">
		<li class="p-4 " class:bg-red-900={$page.url.pathname === '/'}><a href="/">home</a></li>
		<li class="p-4 " class:bg-red-900={$page.url.pathname === '/mouse'}><a href="/mouse">mouse</a></li>
		<li class="p-4 " class:bg-red-900={$page.url.pathname === '/test'}><a href="/test">test</a></li>
		<li class="p-4" class:bg-red-900={$page.url.pathname === '/product'}>
			<a  href="/product/blue-and-grey-striped-top-6995a">product</a>
		</li>
	</ul>
	<!-- <main class="lg:container md:mx-auto"> -->
	<main class=" md:px-14 mx-auto">
		<slot />

	</main>



import { invalidate } from '$app/navigation';
import { productService } from '$src/services/productService';
import type { Load } from '@sveltejs/kit';
import { browser } from '$app/environment';

export const load = (async ({
	url,
	params,
	props,
	fetch,
	session,
	stuff,
	status,
	error,
	depends
}) => {
	console.log('calling load');

	const products = await fetch('/api/products').then((response: any) => response.json());

	return {
		products
	};
}) satisfies Load;

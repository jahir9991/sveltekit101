import { productService } from '$src/services/productService';
import type { Load } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load: Load = async ({ url, params, props, fetch, session, stuff, status, error ,depends}) => {
	console.log('calling load');

	const products = await productService.getAll(fetch);
	return {
		products
		
	};
};

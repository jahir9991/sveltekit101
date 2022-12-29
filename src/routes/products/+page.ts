import { productService } from '$src/services/productService';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	console.log('calling load');

	const fetchProducts = async () => {
		const productRes = await productService.getAll(fetch);
		return productRes.products;
	};

	return {
		products: fetchProducts()
	};
};





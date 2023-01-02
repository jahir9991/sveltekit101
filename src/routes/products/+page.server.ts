import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const products = await fetch('https://dummyjson.com/products').then((response: any) =>
		response.json()
	);

	return {
		products
	};
};

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const products = await fetch('https://dummyjson.com/productsk/').then((response: any) =>
		response.json()
	);

	return {
		products
	};
};

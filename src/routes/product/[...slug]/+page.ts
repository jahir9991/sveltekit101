import { productService } from '$src/services/productService';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params,fetch }) => {
	// console.log(params.slug);

	const product = async () => {
		try {
			return await productService.getBySlug(fetch, params.slug);
		} catch (error) {
			console.log(error);

			return {
				error
			};
		}
	};

	return {
		product: product()
	};
};

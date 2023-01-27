import { ENV } from "$src/environment";

export const productService = {
	getAll: (fetch: any) =>
		fetch('https://dummyjson.com/products').then((response: any) => response.json()),
	getBySlug: (fetch: any, slug: string) =>
		fetch(`${ENV.CORE_API_ENDPOINT}/web/products/slug/${slug}`).then((res) => {
			return res.json();
		})
};

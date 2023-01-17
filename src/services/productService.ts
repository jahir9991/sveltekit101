export const productService = {
	getAll: (fetch: any) =>
		fetch('https://dummyjson.com/products').then((response: any) => response.json()),
	getBySlug: (fetch: any, slug: string) =>
		fetch(`https://api.loox.com.bd/v2/web/products/slug/${slug}`).then((res) => {
			return res.json();
		})
};

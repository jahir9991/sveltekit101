export const productService = {
	getAll: (fetch: any) =>
		fetch('https://dummyjson.com/products').then((response: any) => response.json())
};

export const productService = {
	getAll: (fetch: any) =>
		fetch('https://jsonplaceholder.typicode.com/todos').then((response: any) => response.json())
};

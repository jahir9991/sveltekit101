export const productService = {
	getAll: ()=>fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())
};

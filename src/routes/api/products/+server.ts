export const GET = async ({ request, url }) => {
	const limit = Number(url.searchParams.get('limit') ?? '10');
	const skip = Number(url.searchParams.get('skip') ?? '0');

	const data = await fetch('https://jsonplaceholder.typicode.com/todos').then((response: any) =>
		response.json()
	);

	return new Response(JSON.stringify(data), { status: 200 });
};

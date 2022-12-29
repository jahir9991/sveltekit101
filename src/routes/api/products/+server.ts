export const GET = async ({ request, url }) => {
	const data = [];

	return new Response(JSON.stringify(data), { status: 200 });
};

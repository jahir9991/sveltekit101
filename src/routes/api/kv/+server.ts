import { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET = (async ({ request, platform }) => {

	try {
		const results = await platform.env.jobless.get('user');
		return json({ payload: results });
	} catch (error) {
		return json({ error });
	}
	
	
}) satisfies RequestHandler;

export const POST = (async ({ request, platform }) => {
	const { author, body, slug } = await request.json();

	const success =90;

	if (success) {
		return json({ success });
	} else {
		return json({ error: 'something went wrong' });
	}
}) satisfies RequestHandler;

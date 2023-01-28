import { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET = (async ({ request, platform }) => {
	return json({ platform: platform });
}) satisfies RequestHandler;

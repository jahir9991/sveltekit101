import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	console.log('server hooks called',event.request.headers['cookie']);

	

	const response = await resolve(event);
	return response;
}) satisfies Handle;

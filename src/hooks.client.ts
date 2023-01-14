import type { Handle, HandleClientError } from '@sveltejs/kit';

export const handleError = (({ error, event }) => {
	console.log('client hooks called ');

	const errorId = crypto.randomUUID();
	// example integration with https://sentry.io/
	//   Sentry.captureException(error, { event, errorId });

	return {
		message: 'Whoops!',
		errorId
	};
}) satisfies HandleClientError;



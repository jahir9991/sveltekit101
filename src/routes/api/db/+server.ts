import { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET = (async ({ request, platform }) => {
	try {
		const d = await platform.env.jobdb.prepare(
			`create table users (
				id integer primary key autoincrement,
				author text not null,
				body text not null,
				post_slug text not null
			  );
        `
		);

		const info=d.run();

		if (info) {
			return new Response(JSON.stringify({ payload: info }));
		}
	} catch (error) {
		return new Response(JSON.stringify({ error }));
	}
}) satisfies RequestHandler;

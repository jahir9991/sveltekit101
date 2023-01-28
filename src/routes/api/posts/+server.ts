import { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET = (async ({ request, platform }) => {

	const { results } = await platform.env.jobdb
		.prepare(
			`
         select * from comments
        `
		)
		.all();

        if(results){
            return new Response(JSON.stringify({ payload: results }));
        }

	return new Response(JSON.stringify({ payload: "error" }));
}) satisfies RequestHandler;

export const POST = (async ({ request, platform }) => {
	const { author, body, slug } = await request.json();

	const { success } = await platform.env.jobdb
		.prepare(
			`
    insert into comments (author, body, post_slug) values (?, ?, ?)
  `
		)
		.bind(author, body, slug)
		.run();

	if (success) {
		return json({ success });
	} else {
		return json({ error: 'something went wrong' });
	}
}) satisfies RequestHandler;

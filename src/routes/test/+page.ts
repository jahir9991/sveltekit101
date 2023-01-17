import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	//  await parent();
	const data = 10;
	console.log('pageload called', data);

	return {
		data
	};
};

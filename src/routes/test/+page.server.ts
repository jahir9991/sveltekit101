import { delay } from '$src/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('PageServerLoad called');
	const response=await fetch('https://dummyjson.com/productsk/').then((response: any) =>
		response.json()
	);

	return {
		response
	};
};

const toBool = (value: string): boolean => {
	return value === 'true';
};

export const ENV = {
	IMAGE_ORIGIN_ENDPOINT: import.meta.env.VITE_IMAGE_ORIGIN_ENDPOINT,

	SESSION_KEYS: 'L00X_',
	//Image variants
	IMG_VAR_100x100: '100x100',
	IMG_VAR_210x280: '210x280',
	IMG_VAR_1080x1440: '1080x1440',
	IMG_VAR_2160x2880: '2160x2880',
	IMG_VAR_1280x100: '1280x100',
	IMG_VAR_1920x504: '1920x504',
	IMG_VAR_270x360: '270x360',
	IMG_VAR_540x720: '540x720',
	IMG_VAR_600x600: '600x600',
	IMG_VAR_640x168: '640x168',
	IMG_VAR_1920x150: '1920x150',
	IMG_VAR_920x320: '920x320',
	IMG_VAR_800x600: '800x600',
	IMG_VAR_1200x630: '1200x630',
	IMG_VAR_1536x170: '1536x170',
	IMG_VAR_1536x90: '1536x90',
	IMG_VAR_700x170: '700x170',
	IMG_VAR_185x290: '185x290'
};
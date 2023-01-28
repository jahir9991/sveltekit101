declare global {
	namespace App {
		interface Platform {
			env?: {
				jobdb: D1Namespace;
			};
		}
	}
}

export {};
